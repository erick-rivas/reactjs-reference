/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via builder
    - Modify fetch data
    - Only override existing methods if required

  Base methods:
    - getTeamList(filters, callback)
    - getTeamDetails(teamId, callback)
    - saveTeam(team, callback)
    - setTeam(teamId, team, callback)
    - deleteTeam(teamId, callback)
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
