import * as Const from 'actions/helpers/const';

class Executor
{
  initialState = {
    dataSet: [],
    data: {},
    didFetch: false,
    didSave: null,
    didDelete: null,
    didSet: null
  };
  ref;

  constructor(ref)
  {
    this.ref = ref;
  }

  /**
   === BASE REDUCER ===
   */

  baseReducer = (state = this.initialState, action) =>
  {
    const type = action.type;

    // Receive dataset

    if (type === `${this.ref.id}_${Const.REC_DATASET}`)
      return Object.assign({}, state, {
        dataSet: action.dataSet,
        didFetch: true
      });

    // Receive data

    if (type === `${this.ref.id}_${Const.REC_DATA}`) {
      let isFetch = false;
      let dataSet = [];
      for (let data of state.dataSet)
        if (data.id === action.data.id) {
          isFetch = true;
          dataSet.push(action.data);
        } else dataSet.push(data);
      if (!isFetch && !this.isEmpty(action.data))
        dataSet.push(action.data);
      return Object.assign({}, state, {
        data: action.data,
        dataSet: dataSet
      });
    }

    // Save data

    if (type === `${this.ref.id}_${Const.SAVE_DATA}`)
      return Object.assign({}, state, {
        didSave: action.id
      });

    // Set data

    if (type === `${this.ref.id}_${Const.SET_DATA}`)
      return Object.assign({}, state, {
        didSet: action.id
      });

    // Delete data

    if (type === `${this.ref.id}_${Const.DEL_DATA}`) {
      let dataSet = [];
      for (let data of state.dataSet)
        if (data.id !== action.id)
          dataSet.push(data);
      return Object.assign({}, state, {
        dataSet: dataSet,
        didDelete: action.id
      });
    }

    // Ack save

    if (type === `${this.ref.id}_${Const.ACK_SAVE}`)
      return Object.assign({}, state, {
        didSave: null
      });

    // Ack set

    if (type === `${this.ref.id}_${Const.ACK_SET}`)
      return Object.assign({}, state, {
        didSet: null
      });

    // Ack delete

    if (type === `${this.ref.id}_${Const.ACK_DEL}`)
      return Object.assign({}, state, {
        didDelete: null
      });

    // Restart data

    if (type === `${this.ref.id}_${Const.RES_DATA}`)
      return this.initialState;

    return state;
  }

  isEmpty = (obj) => Object.keys(obj).length === 0;

}
export default Executor;