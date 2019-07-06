/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserActions from 'interactors/actions/users';

import _UserBase from 'sbuild/containers/users/Base';
import UserListOptions from 'components/users/list/Options';

class _UserListOptions extends _UserBase
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
    )(UserListOptions));
}

export default _UserListOptions;

