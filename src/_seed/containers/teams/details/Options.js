/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamActions from 'actions/teams';

import _TeamBase from '_seed/containers/teams/Base';
import TeamDetailsOptions from 'components/teams/details/Options';

class _TeamDetailsOptions extends _TeamBase
{
  teams = new TeamActions();

  _states = state => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(TeamDetailsOptions));
}

export default _TeamDetailsOptions;

