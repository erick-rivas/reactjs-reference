/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import { API_URL } from "settings/Config";

const query = (params) =>
{
  let query = "";
  for (let param in params)
    if (params[param] != null)
      query += `${param}=${params[param]}&`;
  return query;
}

const options = (method = "GET", body = {}) =>
{
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
}

const useMutate = (method, endpoint, mutOptions = {}) =>
{
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

const useGet = (endpoint, params = {}) =>
  useFetch(`${API_URL}${endpoint}/?${query(params)}`);

const usePost = (endpoint, options = {}) =>
  useMutate("POST", endpoint, options);

const usePut = (endpoint, options = {}) =>
  useMutate("PUT", endpoint, options);

const useDelete = (endpoint, options = {}) =>
  useMutate("DELETE", endpoint, options);

export { useGet, usePost, usePut, useDelete };