/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import * as Apollo from "@apollo/react-hooks";
import { useContext } from "react";
import { gql } from "apollo-boost";
import { SINGULARS } from "seed/gql/const";
import SeedContext from "seed/context";

/** @module gql **/


/**
 * Return a hook to execute a graphql query
 * @param {string} gqlQuery Graphql query
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Query hook
 * @example
 * const reqPlayers = useQuery(`
 * {
 *   players {
 *     name,
 *     age
 *   }
 * }`, "name=messi")
 */

const useQuery = (gqlQuery, paramQuery, options = {}) => {
  const model = gqlQuery.match(/[\w]+/g)[0];
  let params = ""
  if (paramQuery) params += "query: \"" + paramQuery + "\",";
  if (options.orderBy) params += "orderBy: \"" + options.orderBy + "\",";
  if (options.start) params += "start: " + options.start + ",";
  if (options.end) params += "end: " + options.end + ",";
  if (params.endsWith(",")) params.slice(0, -1);
  const wrapper = `${model}${params != "" ? "(" + params + ")" : ""}`;
  const query = cleanQuery(gqlQuery.replace(model, wrapper));
  const { addGqlQuery } = useContext(SeedContext);

  const res = Apollo.useQuery(gql(query), {
    ...options,
    onCompleted: (data) => {
      if (options.addQuery == null || options.addQuery != false)
        addGqlQuery(query);
      if (options.onCompleted) options.onCompleted(data);
    }
  });
  return { ...res, data: res.data ? res.data : {} };
};

/**
 * Return a hook to execute a graphql query with pagination
 * @param {string} gqlQuery Graphql query
 * @param {string} paramQuery Query param (sql alike)
 * @param {number} pageNum Page number
 * @param {number} pageSize Number of objects per page
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Page hook
 * @example
 * const reqPlayers = useQuery(`
 * {
 *   players {
 *     name,
 *     age
 *   }
 * }`, "name=messi", 1, 10)
 */

const usePage = (gqlQuery, paramQuery, pageNum, pageSize, options = {}) => {
  let start = pageSize * (pageNum - 1);
  let end = pageSize * pageNum;
  return useQuery(gqlQuery, paramQuery, { ...options, start: start, end: end })
};

/**
 * Return a hook to execute a graphql count
 * @param {string} modelName Graphql model name
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Count hook
 * @example
 * const reqCount = useQuery("player")
 */

const useCount = (modelName, paramQuery, options = {}) => {
  const gqlQuery = `
     {
        ${modelName}Count {
          count
        }
     }
    `
  return useQuery(gqlQuery, paramQuery, { ...options, addQuery: false })
};

/**
 * Return a hook to execute a graphql detail query (single object)
 * @param {string} gqlQuery Graphql query
 * @param {number} id Identifier of the object
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Detail hook
 * @example
 * const reqPlayer = useQuery(`
 * {
 *   player {
 *     name,
 *     age
 *   }
 * }`, 1)
 */

const useDetail = (gqlQuery, id, options = {}) => {
  const model = gqlQuery.match(/[\w]+/g)[0];
  const wrapper = `${model}(id: ${id})`;
  const query = cleanQuery(gqlQuery.replace(model, wrapper));
  const res = Apollo.useQuery(gql(query), options);
  return { ...res, data: res.data ? res.data : {} };
};

const cleanQuery = (query) => {
  const fBracePos = query.indexOf("{");
  let res = query.substring(fBracePos + 1);
  res = "{ " + res.replace(/{/g, "{ id ");
  return res;
};


const useMutate = (mutation) => {
  const [call, res] = mutation;
  const wrap = (body) => {
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



/**
 * Return a hook to execute a save graphql mutation
 * @param {string} gqlQuery Graphql query
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Save hook
 * @example
 * const [callSave, reqSave] = useSave(SAVE_PLAYER, { 
 *   onCompleted: (data) => alert("Player saved")
 * })
 * ...
 * // Execute request
 * callSave({ name: "messi" })
*/

const useSave = (gqlQuery, options = {}) => {
  const query = gql(gqlQuery);
  const mutation = Apollo.useMutation(query, {
    ...options,
    refetchQueries:
      useContext(SeedContext)
        .gqlQueries.filter((cQueryRaw) => {
          const cModels = cQueryRaw.match(/[\w]+/g)[0];
          const cModel = SINGULARS[cModels];
          const cHeader = "save" + cModel.charAt(0).toUpperCase() + cModel.slice(1);
          return gqlQuery.indexOf(cHeader) != -1;
        })
        .map((q) => ({ query: gql(q) }))
  });
  return useMutate(mutation);
};

/**
 * Return a hook to execute a set graphql mutation
 * @param {string} gqlQuery Graphql query
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Set hook
 * @example
 * const [callSet, reqSet] = useSave(SET_PLAYER, { 
 *   onCompleted: (data) => alert("Player modified")
 * })
 * ...
 * // Execute request
 * callSet({ id:1, name: "messi" })
*/

const useSet = (gqlQuery, options = {}) => {
  const query = gql(gqlQuery);
  const mutation = Apollo.useMutation(query, options);
  return useMutate(mutation);
};

/**
 * Return a hook to execute a delete graphql mutation
 * @param {string} gqlQuery Graphql query
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Delete hook
 * @example
 * const [callDelete, reqDelete] = useDelete(DELETE_PLAYER, { 
 *   onCompleted: (data) => alert("Player deleted")
 * })
 * ...
 * // Execute request
 * callDelete({ id: 1 })
*/

const useDelete = (gqlQuery, options = {}) => {
  const context = useContext(SeedContext);
  const query = gql(gqlQuery);
  const mutation = Apollo.useMutation(query, {
    ...options,
    update(cache, { data }) {
      context.gqlQueries
        .forEach((cQueryRaw) => {
          const cModels = cQueryRaw.match(/[\w]+/g)[0];
          const cModel = SINGULARS[cModels];
          const cHeader = "delete" + cModel.charAt(0).toUpperCase() + cModel.slice(1);
          if (gqlQuery.indexOf(cHeader) == -1) return;
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

export { useQuery, usePage, useCount, useDetail, useSet, useSave, useDelete };