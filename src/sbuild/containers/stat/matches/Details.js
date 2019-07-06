/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MatchActions from 'interactors/actions/stat/matches';

import _MatchBase from 'sbuild/containers/stat/matches/Base';
import MatchDetails from 'components/stat/matches/Details';

class _MatchDetails extends _MatchBase
{
  matches = new MatchActions();
 
  _states = (state, props) => ({
  });
  
  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(MatchDetails));
}

export default _MatchDetails;

