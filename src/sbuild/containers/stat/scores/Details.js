/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ScoreActions from 'interactors/actions/stat/scores';

import _ScoreBase from 'sbuild/containers/stat/scores/Base';
import ScoreDetails from 'components/stat/scores/Details';

class _ScoreDetails extends _ScoreBase
{
  scores = new ScoreActions();
 
  _states = (state, props) => ({
  });
  
  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(ScoreDetails));
}

export default _ScoreDetails;

