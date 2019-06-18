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

import _MatchForm from '_seed/containers/matches/Form';

class MatchForm extends _MatchForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new MatchForm().getRouter()
