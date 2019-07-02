/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ScoreActions from 'interactors/actions/scores';

import _ScoreBase from '_seed/containers/scores/Base';
import ScoreList from 'components/scores/List';

class _ScoreList extends _ScoreBase
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
    )(ScoreList));
}

export default _ScoreList;

