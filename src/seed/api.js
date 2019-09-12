/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import fetch from 'cross-fetch';
import * as Urls from 'settings/Urls';


const get = (endpoint, params, callback) =>
{
  let query = '';
  for (let filter in filters)
    if (filters[filter] != null)
      query += `${filter}=${filters[filter]}&`;

  return this.request(
    "GET", endpoint, query, {},
    callback);
}

const post = (endpoint, body, callback) =>
{
  return this.request(
    "POST", endpoint, "", body,
    callback);
}

const put = (endpoint, body, callback) =>
{
  return this.request(
    "PUT", endpoint, "", body,
    callback);
}

const del = (endpoint, callback) =>
{
  return this.request(
    "DELETE", endpoint, "", {},
    callback);
}

const request = (method, path, query, body, callback, toDisp) =>
{
  let args = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
  };

  if (method !== "GET")
    args["body"] = JSON.stringify(body);


  fetch(`${Urls.API_URL}/${this.path}${path}/?${this.fetch}${query}`, args)
    .then(response =>
    {
      if (!response.ok) throw response;
      return response.text()
    })
    .then(text =>
    {
      let json = {}
      try {
        json = JSON.parse(text);
      } catch (e) { }
      if (callback)
        callback({
          body: json,
          ok: true
        });
    })
    .catch(error =>
    {
      if (callback)
        callback({
          body: {
            status: error.status,
            text: error.statusText
          },
          ok: false
        });
    })
  }