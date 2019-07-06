/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing methods if required

  Methods:
    - getMatchList(filters, callback)
    - getMatchDetails(matchId, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch(matchId, callback)
*/

import _Matches from 'sbuild/interactors/actions/stat/matches';

class Matches extends _Matches {}

export default Matches;
