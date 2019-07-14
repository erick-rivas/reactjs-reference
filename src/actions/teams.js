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

  Request methods:
    - reqGet(path, query, callback, toDisp)
    - reqPost(path, body, callback, toDisp)
    - reqPut(path, body, callback, toDisp)
    - reqDelete(path, callback,  toDisp)
    - Available disps:
      - onGetList, onGetDetails, onSaveData, onSetData, onDeleteData
    - Example action:
      -  this.reqGet('/top_players', 'team=1', callback, this.onGetDetails)  
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