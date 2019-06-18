/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamActions from 'actions/teams';

import _TeamBase from '_seed/containers/teams/Base';
import TeamList from 'components/teams/List';

class _TeamList extends _TeamBase
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
    )(TeamList));
}

export default _TeamList;

