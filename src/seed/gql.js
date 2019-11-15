/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as Apollo from "@apollo/react-hooks";
import { useContext } from "react";
import { gql } from "apollo-boost";
import { SINGULARS } from "seed/gql/const";
import SeedContext from "seed/context";


const cleanQuery = (query) =>
{
  const fBracePos = query.indexOf("{");
  let res = query.substring(fBracePos + 1);
  res = "{ " + res.replace(/{/g, "{ id ");
  return res;
};

const useQuery = (raw, queryStr, options = {}) =>
{
  const model = raw.match(/[\w]+/g)[0];
  const wrapper = `${model}${queryStr ? "(query: \"" + queryStr + "\")" : ""}`;
  const query = cleanQuery(raw.replace(model, wrapper));
  const { addGqlQuery } = useContext(SeedContext);

  const res = Apollo.useQuery(gql(query), {
    ...options,
    onCompleted: (data) =>
    {
      addGqlQuery(query);
      if (options.onCompleted) options.onCompleted(data);
    }
  });
  return { ...res, data: res.data ? res.data : {} };
};

const useDetail = (raw, id, options = {}) =>
{
  const model = raw.match(/[\w]+/g)[0];
  const wrapper = `${model}(id: ${id})`;
  const query = cleanQuery(raw.replace(model, wrapper));
  const res = Apollo.useQuery(gql(query), options);
  return { ...res, data: res.data ? res.data : {} };
};

const useMutate = (mutation) =>
{
  const [call, res] = mutation;
  const wrap = (body) =>
  {
    const vars = body ? body : {};
    for (let key in vars) {
      let ele = vars[key];
      if (ele != null) {
        if (ele.id != null)
          vars[key] = vars[key].id;
        if (Array.isArray(ele))
          for (let i = 0; i < ele.length; i++)
            if (ele[i].id != null)
              vars[key][i] = ele[i].id;
      }
    }
    call({ variables: vars });
  };
  return [wrap, { ...res, data: res.data ? res.data : {} }];
};

const useSet = (raw, options = {}) =>
{
  const query = gql(raw);
  const mutation = Apollo.useMutation(query, options);
  return useMutate(mutation);
};

const useSave = (raw, options = {}) =>
{
  const query = gql(raw);
  const mutation = Apollo.useMutation(query, {
    ...options,
    refetchQueries:
      useContext(SeedContext)
        .gqlQueries.filter((cQueryRaw) =>
        {
          const cModels = cQueryRaw.match(/[\w]+/g)[0];
          const cModel = SINGULARS[cModels];
          const cHeader = "save" + cModel.charAt(0).toUpperCase() + cModel.slice(1);
          return raw.indexOf(cHeader) != -1;
        })
        .map((q) => ({ query: gql(q) }))
  });
  return useMutate(mutation);
};

const useDelete = (raw, options = {}) =>
{
  const context = useContext(SeedContext);
  const query = gql(raw);
  const mutation = Apollo.useMutation(query, {
    ...options,
    update(cache, { data })
    {
      context.gqlQueries
        .map((cQueryRaw) =>
        {
          const cModels = cQueryRaw.match(/[\w]+/g)[0];
          const cModel = SINGULARS[cModels];
          const cHeader = "delete" + cModel.charAt(0).toUpperCase() + cModel.slice(1);
          if (raw.indexOf(cHeader) == -1) return;
          const cQuery = gql(cQueryRaw);
          const cResult = cache.readQuery({ query: cQuery });
          const itemId = data[cHeader].id;
          let cData = {}, idx = -1;
          for (let i = 0; i < cResult[cModels].length; i++)
            if (cResult[cModels][i].id == itemId)
              idx = i;
          if (idx == -1) return;
          let result = JSON.parse(JSON.stringify(cResult[cModels])).splice(0);
          result.splice(idx, 1);
          cData[cModels] = result;
          cache.writeQuery({
            query: cQuery,
            data: cData,
          });
        });
    }
  });
  return useMutate(mutation);
};

export { useQuery, useDetail, useSet, useSave, useDelete };