/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via builder
    - Modify fetch data
    - Only override existing methods if required

  Base methods:
    - getMatchList(filters, callback)
    - getMatchDetails(matchId, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch(matchId, callback)
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
