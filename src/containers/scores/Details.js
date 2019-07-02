/*
__Seed builder__v1.0

  Guidelines:
    - Modify default methods & attributes via SeedManifest.yaml
    - Include extra states & props according to current models or ACTIONS
      - Example getTopPlayers()

  Default attributes:
    - scores
    - players
    - matches

  Default methods:
    - getScoreDetails(scoreId, callback)
    - getScoreList(filters, callback)
    - getPlayerList(filters, callback)
    - getMatchList(filters, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore: (scoreId, callback)
*/

import _ScoreDetails from '_seed/containers/scores/Details';

class ScoreDetails extends _ScoreDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new ScoreDetails().getRouter()
