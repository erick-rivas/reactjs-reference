import Executor from 'actions/helpers/executor'

class Players extends Executor
{
  constructor()
  {
    super(
      `PLAYER`,
      `players`,
      state => state.players
    )
  }

  fetchPlayers = invalidate =>
    this.fetchDataSet("", invalidate);
}

export default Players;