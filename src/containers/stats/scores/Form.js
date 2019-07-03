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
    - uploadFile(formWrapper, callback)
*/

import _ScoreForm from '_seed/containers/stats/scores/Form';

class ScoreForm extends _ScoreForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new ScoreForm().getRouter()
