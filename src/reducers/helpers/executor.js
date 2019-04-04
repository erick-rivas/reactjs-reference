import * as Const from 'actions/helpers/const';

class Executor
{
  initialState = {
    dataset: []
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

    // GetList

    if (type === `${this.ref.id}_${Const.GET_LIST}`)
      return Object.assign({}, state, {
        dataset: action.dataset
      });

    // GetDetails, Save & Set

    if (type === `${this.ref.id}_${Const.GET_DETAILS}` ||
      type === `${this.ref.id}_${Const.SAVE}` ||
      type === `${this.ref.id}_${Const.SET}`) {
      let dataset = this.assignData(action.data, state.dataset);
      return Object.assign({}, state, {
        dataset: dataset
      });
    }

    // Delete data

    if (type === `${this.ref.id}_${Const.DELETE}`) {
      let dataset = [];
      for (let data of state.dataset)
        if (data.id !== action.id)
          dataset.push(data);
      return Object.assign({}, state, {
        dataset: dataset
      });
    }

    // Restart data

    if (type === `${this.ref.id}_${Const.RESTART}`)
      return this.initialState;

    return state;
  }

  isEmpty = (obj) => Object.keys(obj).length === 0;

  assignData(data, original)
  {
    if (this.isEmpty(data))
      return original;
    let isFetch = false;
    let dataset = [];
    for (let item of original)
      if (item.id === data.id) {
        isFetch = true;
        dataset.push(data);
      } else dataset.push(item);
    if (!isFetch) dataset.push(data);
    return dataset;
  }

}
export default Executor;