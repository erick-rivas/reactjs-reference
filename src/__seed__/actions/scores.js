/*
__Seed builder__v1.0
*/

import Executor from 'actions/helpers/executor'

class _Scores extends Executor
{
  constructor()
  {
    super(
      `SCORES`,
      `scores`,
      state => state.scores
    )
  }

  getScoreList = (filters = {}) =>
  {
    let params = '';
    for (let filter in filters) 
      params += `{filter}=${filters[filter]}&`;
    return this.getList(`${params}`);
  }

  getScoreDetails = scoreId =>
  {
    return this.getDetails(scoreId);
  }

  saveScore = (score, callback) =>
  {
    return this.saveData(score, callback);
  }

  setScore = (scoreId, score, callback) =>
  {
    return this.setData(scoreId, score, callback);
  }

  deleteScore = (scoreId, callback) =>
  {
    return this.deleteData(scoreId, callback);
  }
}

export default _Scores;
