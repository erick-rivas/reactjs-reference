/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserActions from 'interactors/actions/users';
import FileActions from 'interactors/actions/helpers/files';

import _UserBase from 'sbuild/containers/users/Base';
import UserForm from 'components/users/Form';

class _UserForm extends _UserBase
{
  users = new UserActions();
  files = new FileActions();

  _states = (state, props) => ({
  });

  _disps = disp => ({
    uploadFile: (formWrapper, callback) =>
      disp(this.files.uploadFile(formWrapper, callback)),
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(UserForm));
}

export default _UserForm;

