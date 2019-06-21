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

import _MatchDetailsOptions from '_seed/containers/matches/details/Options';

class MatchDetailsOptions extends _MatchDetailsOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new MatchDetailsOptions().getRouter()
