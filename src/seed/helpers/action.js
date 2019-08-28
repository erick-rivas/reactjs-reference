/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import fetch from 'cross-fetch';
import * as Urls from 'settings/Urls';
import * as Const from 'seed/helpers/redux_const';

class Action
{
  id;
  path;
  state;
  fetch;

  constructor(id, path, state, fetchData = [])
  {
    this.id = id;
    this.path = path;
    this.state = state;
    this.fetch = '';
    for (let f of fetchData)
        this.fetch += `include[]=${f}&`;
  }

  /**
   === REQUESTS ===
   */

  getList = (action, filters, callback) =>
  {
   let query = '';
    for (let filter in filters)
      if (filters[filter] != null)
        query += `filter{${filter}}=${filters[filter]}&`;

    return this.request(
      "GET", `${action}`, query, {},
      callback,
      this.onGetList);
  }

  getDetails = (action, id, callback) =>
  {
    return this.request(
      "GET", `/${id}${action}`, "", {},
      callback,
      this.onGetDetails);
  }

  postData = (action, body, callback) =>
  {
    return this.request(
      "POST", `${action}`, "", body,
      callback,
      this.onPostData);
  }

  putData = (action, id, body, callback) =>
  {
   return this.request(
      "PUT", `/${id}${action}`, "", body,
      callback,
      this.onPutData);
  }

  deleteData = (action, id, callback) =>
  {
    return this.request(
      "DELETE", `/${id}${action}`, "", {},
      callback,
      this.onDeleteData);
  }

  request = (method, path, query, body, callback, toDisp) =>
  {
    return disp =>
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


      return fetch(`${Urls.API_URL}/${this.path}${path}/?${this.fetch}${query}`, args)
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
          if (toDisp) disp(toDisp(json));
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
              body: error,
              ok: false
            });
        })
    }
  }

  /**
   === SYNC ACTIONS ===
   */

  restartData = () => ({
    type: `${this.id}_${Const.RESTART}`
  });

  /**
   === EVENTS (TO REDUCERS) ===
   */

  onGetList = dataset => ({
    type: `${this.id}_${Const.GET_LIST}`,
    dataset: dataset
  });

  onGetDetails = data => ({
    type: `${this.id}_${Const.GET_DETAILS}`,
    data: data
  });

  onPostData = data => ({
    type: `${this.id}_${Const.POST}`,
    data: data
  });

  onPutData = data => ({
    type: `${this.id}_${Const.PUT}`,
    data: data
  });

  onDeleteData = data => ({
    type: `${this.id}_${Const.DELETE}`,
    id: data.id
  });

}

export default Action;