/*
__Seed builder__v1.0

  Guidelines:
    - Modify default methods & attributes via SeedManifest.yaml
    - Include extra states & props according to current models or ACTIONS
      - Example getTopPlayers()

  Default attributes:
    - matches
    - teams
    - scores

  Default methods:
    - getMatchDetails(matchId, callback)
    - getMatchList(filters, callback)
    - getTeamList(filters, callback)
    - getScoreList(filters, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch: (matchId, callback)
*/

import _MatchDetails from 'sbuild/containers/stat/matches/Details';

class MatchDetails extends _MatchDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new MatchDetails().getRouter()
