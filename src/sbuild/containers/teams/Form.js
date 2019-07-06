/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamActions from 'interactors/actions/teams';
import FileActions from 'interactors/actions/helpers/files';

import _TeamBase from 'sbuild/containers/teams/Base';
import TeamForm from 'components/teams/Form';

class _TeamForm extends _TeamBase
{
  teams = new TeamActions();
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
    )(TeamForm));
}

export default _TeamForm;

