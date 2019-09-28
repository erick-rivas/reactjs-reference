import * as Apollo from '@apollo/react-hooks';
import { useContext } from 'react'
import { gql } from 'apollo-boost';
import { SINGULARS } from 'seed/gql/const'
import SeedContext from 'seed/context'


const useQuery = (raw, args) =>
{
  const model = raw.match(/[\w]+/g)[0]
  const wrapper = `${model}${args ? '(query: "' + args + '")' : ''}`
  const query = raw.replace(model, wrapper)
  const { addGqlQuery } = useContext(SeedContext)

  return Apollo.useQuery(gql(query), {
    onCompleted: () => addGqlQuery(query)
  });
}

const useGet = (raw, id) =>
{
  const model = raw.match(/[\w]+/g)[0]
  const wrapper = `${model}(id: ${id})`
  const query = raw.replace(model, wrapper)
  return Apollo.useQuery(gql(query));
}

const useSet = raw =>
{
  const query = gql(raw)
  return Apollo.useMutation(query);
}

const useSave = raw =>
{
  const query = gql(raw);
  return Apollo.useMutation(query, {
    refetchQueries:
      useContext(SeedContext)
        .gqlQueries.filter(cQueryRaw =>
        {
          const cModels = cQueryRaw.match(/[\w]+/g)[0]
          const cModel = SINGULARS[cModels];
          const cHeader = "save" + cModel.charAt(0).toUpperCase() + cModel.slice(1)
          return raw.indexOf(cHeader) != -1;
        })
        .map(q => ({ query: gql(q) }))
  });
}

const useDelete = raw =>
{
  const context = useContext(SeedContext);
  return Apollo.useMutation(gql(raw), {
    update(cache, { data })
    {
      context.gqlQueries
        .map(cQueryRaw =>
        {
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

export { useQuery, useGet, useSet, useSave, useDelete }