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

import _TeamForm from '_seed/containers/teams/Form';

class TeamForm extends _TeamForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamForm().getRouter()
