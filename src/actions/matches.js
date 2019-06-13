/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via models.json
    - Only override existing methods if required

  Methods:
    - getMatchList(filters, callback)
    - getMatchDetails(matchId, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch(matchId, callback)
*/

import _Matches from '_seed/actions/matches';

class Matches extends _Matches {}

export default Matches;
