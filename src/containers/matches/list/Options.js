/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing states & disp if required

  Attributes:
    - matches
    - teams
    - scores

  Methods:
    - getMatchDetails(matchId, callback)
    - getMatchList(filters, callback)
    - getTeamList(filters, callback)
    - getScoreList(filters, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch: (matchId, callback)
*/

import _MatchListOptions from '_seed/containers/matches/list/Options';

class MatchListOptions extends _MatchListOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new MatchListOptions().getRouter()
