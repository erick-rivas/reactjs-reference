/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlayerActions from 'interactors/actions/players';

import _PlayerBase from 'sbuild/containers/players/Base';
import PlayerListOptions from 'components/players/list/Options';

class _PlayerListOptions extends _PlayerBase
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
    )(PlayerListOptions));
}

export default _PlayerListOptions;

