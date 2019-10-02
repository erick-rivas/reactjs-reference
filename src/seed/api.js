import React, {useState} from "react";
import useFetch from "react-fetch-hook";
import * as Urls from 'settings/Urls';

const query = params =>
{
   let query = '';
   for (let param in params)
   if (params[param] != null)
      query += `${param}=${params[param]}&`;
   return query;
}

const options = (method = "GET", body={}) =>
{
  let res = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
  };
  if (method !== "GET")
    res["body"] = JSON.stringify(body);
  return res;
}

const useMutate = (method, endpoint, mutOptions = {}) => {
  const [call, setCall] = useState({body: null, called: false})
  const calling = body =>
     body ? setCall({body: body}) : setCall({body: {}})
  const fetch = useFetch(`${Urls.API_URL}${endpoint}${call.body && call.body.id ? "/" + call.body.id : ""}/`, {
    ...options(method, call.body),
    depends: [call.body != null]
  });
  if (call.body != null && !call.called && fetch.isLoading)
    setCall({...call, called: true});
  if (call.body != null && call.called && !fetch.isLoading){
    if (mutOptions.onCompleted != null && fetch.error == null)
      mutOptions.onCompleted(fetch.data)
    if (mutOptions.onError != null && fetch.error != null)
      mutOptions.onError(fetch.error)

    setCall({body: null, called: false});
  }
  return [calling, {...fetch, loading: fetch.isLoading, called: call.called}];
 }

const useGet = (endpoint, params = {}) =>
  useFetch(`${Urls.API_URL}${endpoint}/?${query(params)}`);

const usePost = (endpoint, options = {}) =>
  useMutate("POST", endpoint, options);

const usePut = (endpoint, options = {}) =>
  useMutate("PUT", endpoint, options);

const useDelete = (endpoint, options = {}) =>
  useMutate("DELETE", endpoint, options);

export { useGet, usePost, usePut, useDelete }