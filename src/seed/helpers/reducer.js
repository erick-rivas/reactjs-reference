/*
__Seed builder__v0.1.8
  (Read_only) Builder helper
*/

import * as Const from "seed/helpers/redux_const";

class Reducer
{
  ref;
  initialState = { dataset: [] };

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

    if (type === `${this.ref.id}_${Const.GET_LIST}`) {
      let merge = this.mergeDataset(state.dataset, action.dataset);
      if (merge.changed)
        return Object.assign({}, state, {
          dataset: merge.dataset
        });
    }

    // GetDetails, post & put

    if (type === `${this.ref.id}_${Const.GET_DETAILS}` ||
      type === `${this.ref.id}_${Const.POST}` ||
      type === `${this.ref.id}_${Const.PUT}`) {
      let merge = this.mergeDataset(state.dataset, [action.data]);
      if (merge.changed)
        return Object.assign({}, state, {
          dataset: merge.dataset
        });
    }

    // Delete data

    if (type === `${this.ref.id}_${Const.DELETE}`) {
      let deleted = this.find(state.dataset, action.id);
      let dataset = state.dataset.splice(0);
      dataset.splice(deleted.pos, 1);
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

  find = (dataset, id) =>
  {
    for (let i = 0; i < dataset.length; i++) {
      if (dataset[i].id == id)
        return {
          value: dataset[i],
          pos: i
        };
    }
    return {
      value: null,
      pos: -1
    };
  }

  mergeDataset(original, dataset)
  {
    let result = original.slice(0);
    let changed = false;
    for (let data of dataset) {
      let current = this.find(original, data.id);
      if (current.value == null) {
        changed = true;
        result.push(data);
      } else {
        if (current.value.hash != data.hash) {
          changed = true;
          result[current.pos] = data;
        }
      }
    }
    return {
      changed: changed,
      dataset: result
    };
  }
}
export default Reducer;