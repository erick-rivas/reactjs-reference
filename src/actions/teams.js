import Executor from 'actions/helpers/executor'

class Teams extends Executor
{
  constructor()
  {
    super(
      `TEAM`,
      `teams`,
      state => state.teams
    )
  }

  fetchTeams = invalidate =>
    this.fetchDataSet("", invalidate);
}

export default Teams;