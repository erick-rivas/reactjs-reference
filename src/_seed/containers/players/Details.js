/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlayerActions from 'interactors/actions/players';

import _PlayerBase from '_seed/containers/players/Base';
import PlayerDetails from 'components/players/Details';

class _PlayerDetails extends _PlayerBase
{
  players = new PlayerActions();
 
  _states = (state, props) => ({
  });
  
  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(PlayerDetails));
}

export default _PlayerDetails;

