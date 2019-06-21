/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ScoreActions from 'actions/scores';

import _ScoreBase from '_seed/containers/scores/Base';
import ScoreListOptions from 'components/scores/list/Options';

class _ScoreListOptions extends _ScoreBase
{
  scores = new ScoreActions();

  _states = state => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(ScoreListOptions));
}

export default _ScoreListOptions;
