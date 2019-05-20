import fetch from 'cross-fetch';
import * as Const from 'actions/helpers/const';

class Executor
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

  getList = (query, callback, invalidate = true) =>
  {
    const fetchList = query =>
    {
      return this.request(
        `${this.path}/?${query}`,
        this.onGetList,
        callback);
    };

    return (disp, getState) =>
    {
      const state = this.state(getState());
      const data = state.data;
      if (invalidate)
        disp(fetchList(query));
      else {
        disp(this.onGetList(data));
        if (callback) callback(data);
      }
    }
  }

  getDetails = (id, callback, invalidate = true) =>
  {
    const fetchData = id =>
    {
      return this.request(
        `${this.path}/${id}/`,
        this.onGetDetails,
        callback);
    }

    return (disp, getState) =>
    {
      const state = this.state(getState());
      const data = state.data;
      if (invalidate)
        disp(fetchData(id));
      else {
        const details = this.getDataDetails(id, data);
        disp(this.onGetDetails(details));
        if (callback) callback(data);
      }
    }
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
      this.onSaveData,
      callback,
      "PUT",
      body);
  }

  updateData = (id, body, callback) =>
  {
    return this.request(
      `${this.path}/${id}/`,
      this.onSetData,
      callback,
      "PATCH",
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

      return fetch(`${Const.API_URL}/${path}`, args)
        .then(response =>
        {
          if (!response.ok) {
            if (callback) callback("error");
            throw response;
          }
          if (response.status === 204) //No content
            return {};
          return response.json()
        })
        .then(json => 
        {
          if (toDisp) disp(toDisp(json));
          if (callback) callback(json);
        })
        .catch(error =>
        {
          if (callback) callback("error");
        });
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

  onDeleteData = id => ({
    type: `${this.id}_${Const.DELETE}`,
    id: id
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

export default Executor;