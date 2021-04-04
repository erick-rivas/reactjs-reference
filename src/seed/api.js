/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import { API_URL } from "settings";


/** @module api **/

/**
 * Returns a hook to execute a GET request
 * @param {string} endpoint Relative path to SERVER_URL/api
 * @param {Object} queryArgs Query args of the request
 * @param {Object} options Hook options (e.g. onCompleted, onError)
 * @returns GET hook
 * @example
 * const reqPlayers = useGet("/players", { name: "messi" })
 * // It is equal to /players?name=messi
 */
const useGet = (endpoint, queryArgs = {}, options = {}) =>
  usePoll(endpoint, queryArgs, options);

/**
* Returns a hook to execute a POST request
* @param {string} endpoint Relative path to SERVER_URL/api
* @param {Object} options Hook options (e.g. onCompleted, onError)
* @returns POST hook
* @example
* const [callSave, reqSave] = usePost("/players", { 
*   onCompleted: (data) => alert("Player saved")
* })
* ...
* // Execute request
* callSave({ name: "messi" })
*/
const usePost = (endpoint, options = {}) =>
  useMutate("POST", endpoint, options);

/**
* Returns a hook to execute a PUT request
* @param {string} endpoint Relative path to SERVER_URL/api
* @param {Object} options Hook options (e.g. onCompleted, onError)
* @returns PUT hook
* @example
* const [callPut, reqPut] = usePut("/players", { 
*   onCompleted: (data) => alert("Player modified")
* })
* ...
* // Execute request
* callPut({ id: 1, name: "messi" })
*/
const usePut = (endpoint, options = {}) =>
  useMutate("PUT", endpoint, options);

/**
* Returns a hook to execute a DELETE request
* @param {string} endpoint Relative path to SERVER_URL/api
* @param {Object} options Hook options (e.g. onCompleted, onError)
* @returns DELETE hook
* @example
* const [callDelete, reqDelete] = useDelete("/players", { 
*   onCompleted: (data) => alert("Player deleted")
* })
* ...
* // Execute request
* callDelete({ id: 1 })
*/
const useDelete = (endpoint, options = {}) =>
  useMutate("DELETE", endpoint, options);


const query = (params) => {
  let query = "";
  for (let param in params)
    if (params[param] != null)
      query += `${param}=${encodeURIComponent(params[param])}&`;
  return query;
};

const options = (method = "GET", body = {}) => {
  let res = {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Token ${sessionStorage.getItem("token")}`
    }
  };
  if (method !== "GET")
    res["body"] = JSON.stringify(body);
  return res;
};

const usePoll = (endpoint, params, pollOptions = {}) => {
  const [status, setStatus] = useState({ data: null, isLoading: true });
  const fetch = useFetch(`${API_URL}${endpoint}/?${query(params)}`, {
    ...options("GET"),
    formatter: (response) => {
      if (!response.ok) throw response;
      return response.text();
    }
  });

  if ((fetch.data != null || fetch.error != null) && status.isLoading) {
    let data = null;
    if (fetch.error == null) {
      data = {};
      try {
        data = JSON.parse(fetch.data);
      } catch (e) { }
      if (pollOptions.onCompleted != null)
        pollOptions.onCompleted(data);
    } else {
      if (pollOptions.onError != null)
        pollOptions.onError(fetch.error);
    }
    setStatus({ data: data, isLoading: false });
  }

  return { ...fetch, loading: status.isLoading, data: status.data };
};

const useMutate = (method, endpoint, mutOptions = {}) => {
  const [call, setCall] = useState({ body: null, called: false });
  const calling = (body) =>
    body ? setCall({ body: body }) : setCall({ body: {} });
  const fetch = useFetch(`${API_URL}${endpoint}${call.body && call.body.id ? "/" + call.body.id : ""}/`, {
    ...options(method, call.body),
    formatter: (response) => {
      if (!response.ok) throw response;
      return response.text();
    },
    depends: [call.body != null]
  });

  if (call.body != null && !call.called && fetch.isLoading)
    setCall({ ...call, called: true });
  if (call.body != null && call.called && !fetch.isLoading) {
    if (mutOptions.onCompleted != null && fetch.error == null) {
      let json = {};
      try {
        json = JSON.parse(fetch.data);
      } catch (e) { }
      mutOptions.onCompleted(json);
    }
    if (mutOptions.onError != null && fetch.error != null)
      mutOptions.onError(fetch.error);

    setCall({ body: null, called: false });
  }
  return [calling, { ...fetch, loading: fetch.isLoading, called: call.called }];
};

export { useGet, usePost, usePut, useDelete };