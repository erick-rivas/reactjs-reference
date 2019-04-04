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

  getPlayers = () =>
    this.getList("");
}

export default Players;