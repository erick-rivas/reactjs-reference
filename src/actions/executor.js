import fetch from 'cross-fetch';
import * as Const from 'actions/const';

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

  fetchDataSet = (invalidate) =>
  {
    const requestDataSet = query =>
    {
      return disp =>
      {
        return fetch(
          `${Const.API_URL}/${this.path}?${query}`)
          .then(response => response.json())
          .then(json => disp(this.onReceiveDataSet(json)))
      }
    };

    return (disp, getState) =>
    {
      const state = this.state(getState());
      const didFetch = state.didFetch;
      const dataSet = state.dataSet;
      if (!didFetch || invalidate)
        disp(requestDataSet());
      else disp(this.onReceiveDataSet(dataSet));
    }
  }

  fetchData = (id, invalidate) =>
  {
    const requestData = id =>
    {
      return disp =>
      {
        return fetch(
          `${Const.API_URL}/${this.path}/${id}`)
          .then(response => response.json())
          .then(json => disp(this.onReceiveData(json)))
      }
    }

    return (disp, getState) =>
    {
      const state = this.state(getState());
      const dataSet = state.dataSet;
      const data = this.getDataDetails(id, dataSet);
      if (!data || invalidate)
        disp(requestData(id));
      else disp(this.onReceiveData(data));
    }
  }

  sendRequest = (query, onRequest) =>
  {
    return disp =>
    {
      return fetch(
        `${Const.API_URL}/${this.path}?${query}`)
        .then(response => response.json())
        .then(json => onRequest(disp))
    }
  }

  saveData = body =>
  {
    return disp =>
    {
      return fetch(
        `${Const.API_URL}/${this.path}`,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json => 
        {
          disp(this.onReceiveData(json));
          disp(this.onSaveData(json.id));
        })
    }
  }

  setData = (id, body) =>
  {
    return disp =>
    {
      return fetch(
        `${Const.API_URL}/${this.path}/${id}`, {
          method: 'put',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json =>
        {
          disp(this.onReceiveData(json));
          disp(this.onSetData(json.id));
        })
    }
  }

  deleteData = id =>
  {
    return disp =>
    {
      return fetch(
        `${Const.API_URL}/${this.path}/${id}`, {
          method: 'delete'
        })
        .then(() => disp(this.onDeleteData(id)))
    };
  }

  /**
   === ACTIONS ===
   */

  ackSave = () => ({
    type: `${this.id}_${Const.ACK_SAVE}`
  });

  ackSet = () => ({
    type: `${this.id}_${Const.ACK_SET}`
  });

  ackDelete = () => ({
    type: `${this.id}_${Const.ACK_DEL}`
  });

  restartData = () => ({
    type: `${this.id}_${Const.RES_DATA}`
  });

  /**
   === EVENTS ===
   */

  onReceiveDataSet = dataSet => ({
    type: `${this.id}_${Const.REC_DATASET}`,
    dataSet: dataSet
  });

  onReceiveData = data => ({
    type: `${this.id}_${Const.REC_DATA}`,
    data: data
  });

  onSaveData = id => ({
    type: `${this.id}_${Const.SAVE_DATA}`,
    id: id
  });

  onSetData = id => ({
    type: `${this.id}_${Const.SET_DATA}`,
    id: id
  });

  onDeleteData = id => ({
    type: `${this.id}_${Const.DEL_DATA}`,
    id: id
  });


  /**
  === UTIL ===
  */

  getDataDetails = (id, dataSet) =>
  {
    for (let data of dataSet)
      if (data.id === id) return data;
    return null;
  };

}

export default Executor;