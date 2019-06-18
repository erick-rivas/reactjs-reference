/*
__Seed builder__v1.0

  attributes:
    - teams
    - players

  methods:
    - getTeamDetails(teamId, callback)
    - getTeamList(filters, callback)
    - getPlayerList(filters, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam: (teamId, callback)
*/

import _TeamDetails from '_seed/containers/teams/Details';

class TeamDetails extends _TeamDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamDetails().getRouter()
