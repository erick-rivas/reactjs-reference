import fetch from 'cross-fetch';
import * as Settings from 'settings';
import * as Const from 'actions/helpers/const';

class Action
{
  id;
  path;
  state;

  constructor(id, path, state)
  {
    this.id = id;
    this.path = path;
    this.state = state;
  }

  /**
   === REQUESTS ===
   */

  getList = (query, callback) =>
  {
    return this.request(
      `${this.path}/?${query}`,
      this.onGetList,
      callback);
  }

  getDetails = (id, callback) =>
  {
    return this.request(
      `${this.path}/${id}/`,
      this.onGetDetails,
      callback);
  }

  saveData = (body, callback) =>
  {
    return this.request(
      `${this.path}/`,
      this.onSaveData,
      callback,
      "POST",
      body);
  }

  setData = (id, body, callback) =>
  {
    return this.request(
      `${this.path}/${id}/`,
      this.onSetData,
      callback,
      "PUT",
      body);
  }

  deleteData = (id, callback) =>
  {
    return this.request(
      `${this.path}/${id}/`,
      this.onDeleteData,
      callback,
      "DELETE");
  }

  request = (path, toDisp, callback, method = "GET", body = {}) =>
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

      return fetch(`${Settings.API_URL}/${path}`, args)
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