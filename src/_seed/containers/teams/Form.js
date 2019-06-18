/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamActions from 'actions/teams';

import _TeamBase from '_seed/containers/teams/Base';
import TeamForm from 'components/teams/Form';

class _TeamForm extends _TeamBase
{
  teams = new TeamActions();

  _states = (state, props) => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(TeamForm));
}

export default _TeamForm;

