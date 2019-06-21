/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing states & disp if required

  Attributes:
    - teams
    - players

  Methods:
    - getTeamDetails(teamId, callback)
    - getTeamList(filters, callback)
    - getPlayerList(filters, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam: (teamId, callback)
*/

import _TeamList from '_seed/containers/teams/List';

class TeamList extends _TeamList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamList().getRouter()
