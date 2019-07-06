/*
__Seed builder__v1.0

  Guidelines:
    - Modify default methods & attributes via SeedManifest.yaml
    - Include extra states & props according to current models or ACTIONS
      - Example getTopPlayers()

  Default attributes:
    - teams
    - players

  Default methods:
    - getTeamDetails(teamId, callback)
    - getTeamList(filters, callback)
    - getPlayerList(filters, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam: (teamId, callback)
*/

import _TeamDetailsOptions from 'sbuild/containers/teams/details/Options';

class TeamDetailsOptions extends _TeamDetailsOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamDetailsOptions().getRouter()
