/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
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

import _Teams from 'sbuild/actions/teams';

class Teams extends _Teams {}

export default Teams;
