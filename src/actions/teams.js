/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Modify fetch data
    - Only override existing methods if required

  Default methods:
    - getTeamList(filters, callback)
    - getTeamDetails(teamId, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam(teamId, callback)

  Request methods:
    - request(path, toDisp, callback, method = "GET", body = {})
      - Use this parent method to call new actions
*/

import _Teams from 'seed/actions/teams';

class Teams extends _Teams 
{
  constructor()
  {
    const fetch = [
      "rival.*",
      "players.*",
    ]
    super(fetch)
  }
}

export default Teams;
