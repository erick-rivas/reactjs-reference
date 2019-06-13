/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlayerActions from 'actions/players';

import _PlayerBase from '_seed/containers/players/Base';
import PlayerList from 'components/players/List';

class _PlayerList extends _PlayerBase
{
  players = new PlayerActions();

  _states = state => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(PlayerList));
}

export default _PlayerList;

