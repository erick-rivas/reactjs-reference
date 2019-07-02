/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserActions from 'interactors/actions/users';

import _UserBase from '_seed/containers/users/Base';
import UserList from 'components/users/List';

class _UserList extends _UserBase
{
  users = new UserActions();

  _states = state => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(UserList));
}

export default _UserList;

