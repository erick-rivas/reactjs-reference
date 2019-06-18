/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserActions from 'actions/users';

import _UserBase from '_seed/containers/users/Base';
import UserForm from 'components/users/Form';

class _UserForm extends _UserBase
{
  users = new UserActions();

  _states = (state, props) => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(UserForm));
}

export default _UserForm;

