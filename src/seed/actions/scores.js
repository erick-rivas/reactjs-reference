/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _Scores extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
        "player.*",
        "match.*",
      ];

    super(
      `SCORES`,
      `scores`,
      state => state.scores,
      fetch
    )
  }

  getScoreList(params = {}, callback)
  {
    return this.getList(params, callback);
  }

  getScoreDetails(scoreId, callback)
  {
    return this.getDetails(scoreId, callback);
  }

  saveScore(score, callback)
  {
    return this.saveData(score, callback);
  }

  setScore(scoreId, score, callback)
  {
    return this.setData(scoreId, score, callback);
  }

  deleteScore(scoreId, callback)
  {
    return this.deleteData(scoreId, callback);
  }
}

export default _Scores;