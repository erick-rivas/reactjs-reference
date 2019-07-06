/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlayerActions from 'interactors/actions/players';
import FileActions from 'interactors/actions/helpers/files';

import _PlayerBase from 'sbuild/containers/players/Base';
import PlayerForm from 'components/players/Form';

class _PlayerForm extends _PlayerBase
{
  players = new PlayerActions();
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
    )(PlayerForm));
}

export default _PlayerForm;

