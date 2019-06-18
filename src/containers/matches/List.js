/*
__Seed builder__v1.0

  attributes:
    - matches
    - teams
    - scores

  methods:
    - getMatchDetails(matchId, callback)
    - getMatchList(filters, callback)
    - getTeamList(filters, callback)
    - getScoreList(filters, callback)
    - saveMatch(match, callback)
    - setMatch(matchId, match, callback)
    - deleteMatch: (matchId, callback)
*/

import _MatchList from '_seed/containers/matches/List';

class MatchList extends _MatchList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new MatchList().getRouter()
