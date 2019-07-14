/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import fetch from 'cross-fetch';
import * as Urls from 'util/settings/Urls';
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

  getList = (filters, callback) =>
  {
   let query = '';
    for (let filter in filters)
      if (filters[filter] != null)
        query += `filter{${filter}}=${filters[filter]}&`;

    return this.reqGet(
      ``, query,
      callback,
      this.onGetList);
  }

  getDetails = (id, callback) =>
  {
    return this.reqGet(
      `/${id}`, ``,
      callback,
      this.onGetDetails);
  }

  saveData = (body, callback) =>
  {
    return this.reqPost(
      ``, body,
      callback,
      this.onSaveData);
  }

  setData = (id, body, callback) =>
  {
    return this.reqPut(
      `/${id}`, body,
      callback,
      this.onSetData);
  }

  deleteData = (id, callback) =>
  {
    return this.reqDelete(
      `/${id}`,
      callback,
      this.onDeleteData);
  }


  reqGet(path, query, callback, toDisp)
  {
     return this.request(
      "GET", path, query, {},
      callback,
      toDisp);
  }

  reqPost(path, body, callback, toDisp)
  {
    return this.request(
      "POST", path, "", body,
      callback,
      toDisp);
  }

  reqPut(path, body, callback, toDisp)
  {
    return this.request(
      "PUT", path, "", body,
      callback,
      toDisp);
  }

  reqDelete(path, callback,  toDisp)
  {
     return this.request(
      "DELETE", path, "", {},
      callback,
      toDisp);
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

  onSaveData = data => ({
    type: `${this.id}_${Const.SAVE}`,
    data: data
  });

  onSetData = data => ({
    type: `${this.id}_${Const.SET}`,
    data: data
  });

  onDeleteData = data => ({
    type: `${this.id}_${Const.DELETE}`,
    id: data.id
  });


  /**
  === UTIL ===
  */

  getDataDetails = (id, dataset) =>
  {
    for (let data of dataset)
      if (data.id === id) return data;
    return null;
  };

}

export default Action;