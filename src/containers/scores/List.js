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

import _ScoreList from '_seed/containers/scores/List';

class ScoreList extends _ScoreList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new ScoreList().getRouter()
