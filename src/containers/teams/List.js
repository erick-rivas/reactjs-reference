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

import _TeamList from 'sbuild/containers/teams/List';

class TeamList extends _TeamList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamList().getRouter()
