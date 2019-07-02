/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlayerActions from 'interactors/actions/players';

import _PlayerBase from '_seed/containers/players/Base';
import PlayerDetailsOptions from 'components/players/details/Options';

class _PlayerDetailsOptions extends _PlayerBase
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
    )(PlayerDetailsOptions));
}

export default _PlayerDetailsOptions;

