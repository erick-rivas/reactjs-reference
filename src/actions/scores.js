/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Modify fetch data
    - Only override existing methods if required

  Default methods:
    - getScoreList(filters, callback)
    - getScoreDetails(scoreId, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore(scoreId, callback)

  Request methods:
    - request(path, toDisp, callback, method = "GET", body = {})
      - Use this parent method to call new actions
*/

import _Scores from 'seed/actions/scores';

class Scores extends _Scores 
{
  constructor()
  {
    const fetch = [
      "player.*",
      "match.*",
    ]
    super(fetch)
  }
}

export default Scores;