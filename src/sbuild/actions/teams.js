/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Action from 'actions/helpers/action';

class _Teams extends Action
{
  constructor()
  {
    super(
      `TEAMS`,
      `teams`,
      state => state.teams
    )
  }

  getTeamList = (params = {}, callback) =>
  {
    return this.getList(params, callback);
  }

  getTeamDetails = (teamId, callback) =>
  {
    return this.getDetails(teamId, callback);
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
