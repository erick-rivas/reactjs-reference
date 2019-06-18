/*
__Seed builder__v1.0

  attributes:
    - scores
    - players
    - matches

  methods:
    - getScoreDetails(scoreId, callback)
    - getScoreList(filters, callback)
    - getPlayerList(filters, callback)
    - getMatchList(filters, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore: (scoreId, callback)
*/

import _ScoreForm from '_seed/containers/scores/Form';

class ScoreForm extends _ScoreForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new ScoreForm().getRouter()
