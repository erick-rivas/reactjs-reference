/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Action from 'interactors/actions/helpers/action';

class _Scores extends Action
{
  constructor()
  {
    super(
      `SCORES`,
      `scores`,
      state => state.scores
    )
  }

  getScoreList = (filters = {}, callback) =>
  {
    let params = '';
    for (let filter in filters) 
      if (filters[filter] != null)
        params += `${filter}=${filters[filter]}&`;
    return this.getList(`${params}`, callback);
  }

  getScoreDetails = (scoreId, callback) =>
  {
    return this.getDetails(scoreId, callback);
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
