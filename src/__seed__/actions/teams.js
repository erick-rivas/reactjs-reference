/*
__Seed builder__v1.0
*/

import Executor from 'actions/helpers/executor'

class _Teams extends Executor
{
  constructor()
  {
    super(
      `TEAMS`,
      `teams`,
      state => state.teams
    )
  }

  getTeamList = (filters = {}) =>
  {
    let params = '';
    for (let filter in filters) 
      params += `{filter}=${filters[filter]}&`;
    return this.getList(`${params}`);
  }

  getTeamDetails = teamId =>
  {
    return this.getDetails(teamId);
  }

  saveTeam = (team, callback) =>
  {
    return this.saveData(team, callback);
  }

  setTeam = (teamId, team, callback) =>
  {
    return this.setData(teamId, team, callback);
  }

  deleteTeam = (teamId, callback) =>
  {
    return this.deleteData(teamId, callback);
  }
}

export default _Teams;
