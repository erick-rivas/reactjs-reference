/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via builder
    - Modify fetch data
    - Only override existing methods if required

  Base methods:
    - getScoreList(filters, callback)
    - getScoreDetails(scoreId, callback)
    - saveScore(score, callback)
    - setScore(scoreId, score, callback)
    - deleteScore(scoreId, callback)
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