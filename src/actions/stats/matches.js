/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Modify fetch data
    - Only override existing methods if required

  Default methods:
    - getMatchList(filters, callback)
    - getMatchDetails(matchId, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch(matchId, callback)

  Request methods:
    - request(path, toDisp, callback, method = "GET", body = {})
      - Use this parent method to call new actions
*/

import _Matches from 'seed/actions/stats/matches';

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
