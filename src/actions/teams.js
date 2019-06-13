/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via models.json
    - Only override existing methods if required

  Methods:
    - getTeamList(filters, callback)
    - getTeamDetails(teamId, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam(teamId, callback)
*/

import _Teams from '_seed/actions/teams';

class Teams extends _Teams {}

export default Teams;
