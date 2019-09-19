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

const mutate = (method, endpoint, params = {}) => {
  const [call, setCall] = useState({body: null, called: false})
  const calling = (args = {}) =>
     args.body ? setCall({body: args.body}) : setCall({body: {}})
  const fetch = useFetch(`${Urls.API_URL}${endpoint}${call.body && call.body.id ? "/" + call.body.id : ""}/?${query(params)}`, {
    ...options(method, call.body),
    depends: [call.body != null]
  });
  if (call.body != null && !call.called && fetch.isLoading) setCall({...call, called: true});
  if (call.body != null && call.called && !fetch.isLoading) setCall({body: null, called: false});
  return [calling, {...fetch, loading: fetch.isLoading, called: call.called }];
 }

const get = (endpoint, params = {}) =>
  useFetch(`${Urls.API_URL}${endpoint}/?${query(params)}`);

const post = (endpoint, params = {}) =>
  mutate("POST", endpoint, params);

const put = (endpoint, params = {}) =>
  mutate("PUT", endpoint, params);

const del = (endpoint, params = {}) =>
  mutate("DELETE", endpoint, params);

export { get, post, put, del }

