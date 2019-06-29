/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing states & disp if required

  Attributes:
    - scores
    - players
    - matches

  Methods:
    - getScoreDetails(scoreId, callback)
    - getScoreList(filters, callback)
    - getPlayerList(filters, callback)
    - getMatchList(filters, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore: (scoreId, callback)
*/

import _ScoreListOptions from '_seed/containers/scores/list/Options';

class ScoreListOptions extends _ScoreListOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new ScoreListOptions().getRouter()