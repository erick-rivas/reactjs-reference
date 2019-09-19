import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { useContext } from 'react'
import { gql } from 'apollo-boost';
import {SINGULARS} from 'seed/gql/const'
import SeedContext from 'seed/context'


const get = (raw, id) => {
  const model = raw.match(/[\w]+/g)[0]
  const wrapper = `${model}(id: ${id})`
  const query = raw.replace(model, wrapper)
  return useQuery(gql(query));
}

const list = (raw, args) => {
  const model = raw.match(/[\w]+/g)[0]
  const wrapper = `${model}${args ? '(query: "' + args + '")' : ''}`
  const query = raw.replace(model, wrapper)
  const { addGqlQuery } = useContext(SeedContext)

  return useQuery(gql(query), {
    onCompleted: () => addGqlQuery(query)
  });
}

const update = raw => {
  const query = gql(raw)
  return useMutation(query);
}

const create = raw => {
  const query = gql(raw);
  const { gqlQueries } = useContext(SeedContext);
  const cacheQueries = gqlQueries.filter(cQueryRaw => {
    const cModels = cQueryRaw.match(/[\w]+/g)[0]
    const cModel = SINGULARS[cModels];
    const cHeader = "create" + cModel.charAt(0).toUpperCase() + cModel.slice(1)
    return raw.indexOf(cHeader) != -1;
  })
  return useMutation(query, {
    refetchQueries: cacheQueries.map(q => ({ query: gql(q) }))
  });
}

const del = raw => {
  const { gqlQueries } = useContext(SeedContext);
  return useMutation(gql(raw), {
    update(cache, { data }) {
      gqlQueries.map(cQueryRaw => {
        const cModels = cQueryRaw.match(/[\w]+/g)[0]
        const cModel = SINGULARS[cModels];
        const cHeader = "delete" + cModel.charAt(0).toUpperCase() + cModel.slice(1)
        if (raw.indexOf(cHeader) == -1) return;
        const cQuery = gql(cQueryRaw)
        const cResult = cache.readQuery({ query: cQuery });
        const itemId = data[cHeader].id;
        let cData = {}, idx = -1;
        for (let i = 0; i < cResult[cModels].length; i++)
          if (cResult[cModels][i].id == itemId)
            idx = i;
        if (idx == -1) return;
        let result = JSON.parse(JSON.stringify(cResult[cModels])).splice(0);
        result.splice(idx, 1);
        cData[cModels] = result
        cache.writeQuery({
          query: cQuery,
          data: cData,
        });
      })
    }
  });
}

export { get, list, update, create, del }