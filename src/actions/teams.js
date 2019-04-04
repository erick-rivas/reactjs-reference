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

  getTeams = () =>
    this.getList("");
}

export default Teams;