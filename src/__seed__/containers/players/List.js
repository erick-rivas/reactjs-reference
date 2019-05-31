/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PlayerActions from 'actions/players'

import PlayerList from 'components/players/List'

class _PlayerList
{
  players = new PlayerActions();

  _states = state => ({
    user: state.auth.user,
    players: state.players.dataset,
  });

  _disps = disp => ({
    getPlayerList: filters =>
      disp(this.players.getPlayerList(filters)),
  })

  states = state => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._states(state, props), ...this.states(state, props)
  });


  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(PlayerList));
}

export default _PlayerList;
