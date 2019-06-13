/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ScoreActions from 'actions/scores';

import _ScoreBase from '_seed/containers/scores/Base';
import ScoreForm from 'components/scores/Form';

class _ScoreForm extends _ScoreBase
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
    )(ScoreForm));
}

export default _ScoreForm;

