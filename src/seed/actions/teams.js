/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _Teams extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
        "rival.*",
        "players.*",
      ];

    super(
      `TEAMS`,
      `teams`,
      state => state.teams,
      fetch
    )
  }

  getTeamList(params = {}, callback)
  {
    return this.getList('', params, callback);
  }

  getTeamDetails(teamId, callback)
  {
    return this.getDetails('', teamId, callback);
  }

  saveTeam(team, callback)
  {
    return this.postData('', team, callback);
  }

  setTeam(teamId, team, callback)
  {
    return this.putData('', teamId, team, callback);
  }

  deleteTeam(teamId, callback)
  {
    return this.deleteData('', teamId, callback);
  }
}

export default _Teams;
