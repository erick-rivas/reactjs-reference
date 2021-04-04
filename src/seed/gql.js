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
  const normalizedQuery = normalizeQuery(gqlQuery);
  const queryName = getHeaderNames(normalizedQuery)[0];
  // Build query
  let params = "";
  if (paramQuery) params += "query: \"" + paramQuery + "\",";
  if (options.orderBy) params += "orderBy: \"" + options.orderBy + "\",";
  if (options.limit) params += "limit: " + options.start + ",";
  if (options.pageNum) params += "pageNum: " + options.pageNum + ",";
  if (options.pageSize) params += "pageSize: " + options.pageSize + ",";
  if (params.endsWith(",")) params.slice(0, -1);
  const wrapper = `${queryName}${params != "" ? "(" + params + ")" : ""}`;
  const query = normalizedQuery.replace(queryName, wrapper);

  // Execute query
  const { addGqlQuery } = useContext(SeedContext);
  const res = Apollo.useQuery(gql(query), {
    ...options,
    onCompleted: (data) => {
      if (options.cacheQuery == null || options.cacheQuery != false)
        addGqlQuery(query); // Include query to cache for re-fetch
      if (options.onCompleted) options.onCompleted(data);
    },
    partialRefetch: true
  });
  return { ...res, data: res.data ? res.data : {} };
};

/**
 * Return a hook to execute a graphql query with pagination
 * @param {string} gqlQuery Graphql query
 * @param {number} pageNum Page number
 * @param {number} pageSize Number of objects per page
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options hook options (e.g. onCompleted, onError)
 * @returns Pagination hook
 * @example
 * const reqPlayers = useQuery(`
 * {
 *   playerPagination {
 *     totalPages
 *     players {
 *       id
 *    }
 *   }
 * }`, "name=messi", 1, 10)
 */
const usePagination = (gqlQuery, pageNum, pageSize, paramQuery, options = {}) =>
  useQuery(gqlQuery, paramQuery, { ...options, pageNum, pageSize });

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
    }`;
  return useQuery(gqlQuery, paramQuery, { ...options, cacheQuery: false });
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
  const normalizedQuery = normalizeQuery(gqlQuery);
  const queryName = getHeaderNames(normalizedQuery)[0];
  // Build query
  const wrapper = `${queryName}(id: ${id})`;
  const query = normalizedQuery.replace(queryName, wrapper);
  // Execute query
  const { addGqlQuery } = useContext(SeedContext);
  addGqlQuery(query); // Include query to cache to re-fetch
  const res = Apollo.useQuery(gql(query), options);
  return { ...res, data: res.data ? res.data : {} };
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
  const query = normalizeQuery(gqlQuery);
  const mutation = Apollo.useMutation(gql(gqlQuery), {
    ...options,
    refetchQueries: // Re-fetch cache queries related to model
      useContext(SeedContext).gqlQueries
        .filter((cacheQuery) => hasCommonModels(query, cacheQuery))
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
  const mutation = Apollo.useMutation(gql(gqlQuery), options);
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
  const query = normalizeQuery(gqlQuery);
  const mutation = Apollo.useMutation(gql(gqlQuery), {
    ...options,
    refetchQueries: // Re-fetch cache queries related to model
      useContext(SeedContext).gqlQueries
        .filter((cacheQuery) => {
          const delModel = getModelNames(query)[0];
          const cacheModel = getModelNames(cacheQuery)[0];
          const cacheHeader = getHeaderNames(cacheQuery)[0];
          if (delModel == cacheModel && //If same model
            cacheModel == cacheHeader) //And query singular (header = model) omit query
            return false;
          return hasCommonModels(query, cacheQuery);
          
        })
        .map((q) => ({ query: gql(q) }))
    /*
    update(cache, { data }) {
      context.gqlQueries
        .forEach((cacheQuery) => {
          //Check if cache and deleteQuery has common models
          if (!hasCommonModels(query, cacheQuery)) return;
          alert(cacheQuery)
          const cacheHeader = getHeaderNames(cacheQuery)[0]
          const deleteHeader = getHeaderNames(query)[0]

          // Check if delete id exists in cache
          const cacheResult = cache.readQuery({ query: gql(cacheQuery) });
          const deletedId = data[deleteHeader].id;
          let idx = -1;
          for (let i = 0; i < cacheResult[cacheHeader].length; i++)
            if (cacheResult[cacheHeader][i].id == deletedId)
              idx = i;
          if (idx == -1) return;

          // Update cache
          let cacheData = {}
          let result = JSON.parse(JSON.stringify(cacheResult[cacheHeader])).splice(0);
          result.splice(idx, 1);
          cacheData[cacheHeader] = result;
          cache.writeQuery({
            query: cacheQuery,
            data: cacheData,
          });
        });
    }*/
  });
  return useMutate(mutation);
};


/* Normalize query to ease processing */
const normalizeQuery = (gqlQuery) => {
  let res = gqlQuery.trim();
  res = res.replace(/mutation .*?\)/, "") //Remove mutation header
  res = res.substring(1, res.length - 1);
  res = res.replace(/\n/g, " ");
  res = res.replace(/{/g, " { ");
  res = res.replace(/}/g, " } ");
  res = res.replace(/{/g, "{ id "); // Auto include id attr to every model
  res = res.replace(/[\s,]+/g, " ").trim();
  res = "{ " + res + " }";
  return res;
};

/* Get gql header names (e.g. name { } ) */
const getHeaderNames = (gqlQuery) => {
  const query = gqlQuery
    .replace(/\(.*?\)/g, ''); // Remove arguments
  const match = query.match(/[\w]+ {/g);  // Word and a { after
  if (match != null)
    return match.map(model => model.replace(" {", ""));
  return [];
}

/* Get model names for inner and outer queries */
const getModelNames = (gqlQuery) => {
  const models = getHeaderNames(gqlQuery).map(model => model
    .replace(/Pagination$/, "")  // Remove pagination suffix
    .replace(/^set/, "")     // Remove set prefix
    .replace(/^save/, "")    // Remove save prefix
    .replace(/^delete/, "")  // Remove delete prefix
    .replace(/^\w/, (c) => c.toLowerCase()) //Start with lowercase
  );
  let res = [];
  for(let model of models)
    if(SINGULARS[model] != null)
      res.push(SINGULARS[model]);
  return res;
}

/* Identify if a queryA has related models with query B */
const hasCommonModels = (gqlQueryA, gqlQueryB) => {
    const aModels = getModelNames(gqlQueryA);
    const bModels = getModelNames(gqlQueryB);
    for (let aModel of aModels)
        for (let bModel of bModels)
            if (aModel == bModel)
                return true;
    return false;
}

const useMutate = (mutation) => {
  const [call, res] = mutation;
  const wrap = (body) => { // Parse id calls variables (Ex. model.id = 1 to model = 1)
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

export { normalizeQuery, getHeaderNames, getModelNames, useQuery, usePagination, useCount, useDetail, useSet, useSave, useDelete };