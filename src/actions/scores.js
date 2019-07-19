/*
__Seed builder__v1.0
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