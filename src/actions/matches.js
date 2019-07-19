/*
__Seed builder__v1.0
*/

import _Matches from 'seed/actions/matches';

class Matches extends _Matches 
{
  constructor()
  {
    const fetch = [
      "local.*",
      "visitor.*",
      "scores.*",
    ]
    super(fetch)
  }
}

export default Matches;
