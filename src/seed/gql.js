/*
__Seed builder__
  (Read_only) Builder helper
*/

import * as Apollo from "@apollo/client/react";
import { useEffect } from "react";
import { gql } from "@apollo/client";

/** @module gql **/

/**
 * Return a hook to execute a graphql query
 * @param {string} gqlQuery Graphql query
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options Request options (onCompleted, onError, orderBy, limit, cacheQuery=false)
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
  if (options.limit) params += "limit: " + options.limit + ",";
  if (options.pageNum) params += "pageNum: " + options.pageNum + ",";
  if (options.pageSize) params += "pageSize: " + options.pageSize + ",";
  if (params.endsWith(",")) params.slice(0, -1);
  const wrapper = `${queryName}${params != "" ? "(" + params + ")" : ""}`;
  const query = normalizedQuery.replace(queryName, wrapper);

  // Execute query
  const res = Apollo.useQuery(gql(query), {
    partialRefetch: true,
    notifyOnNetworkStatusChange: true,
    ...options
  });

  // Execute callbacks
  useEffect(() => {
    if (options.onCompleted && !res.loading && !res.error) options.onCompleted(res.data ? res.data : {});
    if (options.onCompleted && !res.loading && res.error) options.onError(res.error);
  }, [res.data, res.error, res.loading])

  return { ...res, data: res.data ? res.data : {}, query: query };
};

/**
 * Return a hook to execute a graphql query with pagination
 * @param {string} gqlQuery Graphql query
 * @param {number} pageNum Page number
 * @param {number} pageSize Number of objects per page
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options Request options (onCompleted, onError, orderBy, cacheQuery=false)
 * @returns Pagination hook
 * @example
 * const reqPlayers = usePagination(`
 * {
 *   playerPagination {
 *     totalPages
 *     players {
 *       id
 *    }
 *   }
 * }`, 1, 10, "name=messi")
 */
const usePagination = (gqlQuery, pageNum, pageSize, paramQuery, options = {}) =>
  useQuery(gqlQuery, paramQuery, { ...options, pageNum, pageSize });

/**
 * Return a hook to execute a graphql count
 * @param {string} modelName Graphql model name
 * @param {string} paramQuery Query param (sql alike)
 * @param {Object} options Request options (onCompleted, onError)
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
 * @param {Object} options Request options (onCompleted, onError, cacheQuery=false)
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
  const res = Apollo.useQuery(gql(query), {
    partialRefetch: true,
    notifyOnNetworkStatusChange: true,
    ...options
  });

  // Execute callbacks
  useEffect(() => {
    if (options.onCompleted && !res.loading && !res.error) options.onCompleted(res.data ? res.data : {});
    if (options.onCompleted && !res.loading && res.error) options.onError(res.error);
  }, [res.data, res.error, res.loading])

  return { ...res, data: res.data ? res.data : {} };
};

/**
 * Return a hook to execute a save graphql mutation
 * @param {string} gqlQuery Graphql query
 * @param {Object} options Request options (onCompleted, onError)
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
  const mutation = Apollo.useMutation(gql(gqlQuery), {
    ...options
  });
  return useMutate(mutation);
};

/**
 * Return a hook to execute a set graphql mutation
 * @param {string} gqlQuery Graphql query
 * @param {Object} options Request options (onCompleted, onError)
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
 * @param {Object} options Request options (onCompleted, onError)
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
  const mutation = Apollo.useMutation(gql(gqlQuery), {
    ...options
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

const useMutate = (mutation) => {
  const [call, res] = mutation;
  const wrap = (body) => { // Parse id calls variables (Ex. model.id = 1 to model = 1)
    const vars = body ? body : {};
    for (let key in vars) {
      let ele = vars[key];
      if (key == 'id')
        vars[key] = parseInt(vars[key])
      if (ele != null) {
        if (ele.id != null)
          vars[key] = parseInt(vars[key].id);
        if (Array.isArray(ele))
          for (let i = 0; i < ele.length; i++)
            if (ele[i].id != null)
              vars[key][i] = parseInt(ele[i].id);
      }
    }
    call({ variables: vars });
  };
  return [wrap, { ...res, data: res.data ? res.data : {} }];
};

export {
  normalizeQuery, getHeaderNames,
  useQuery, usePagination, useCount, useDetail, useSet, useSave, useDelete };