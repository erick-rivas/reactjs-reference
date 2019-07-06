/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MatchActions from 'interactors/actions/stat/matches';
import FileActions from 'interactors/actions/helpers/files';

import _MatchBase from 'sbuild/containers/stat/matches/Base';
import MatchForm from 'components/stat/matches/Form';

class _MatchForm extends _MatchBase
{
  matches = new MatchActions();
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
    )(MatchForm));
}

export default _MatchForm;

