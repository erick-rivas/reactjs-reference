/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ScoreActions from 'interactors/actions/stats/scores';
import FileActions from 'interactors/actions/helpers/files';

import _ScoreBase from '_seed/containers/stats/scores/Base';
import ScoreForm from 'components/stats/scores/Form';

class _ScoreForm extends _ScoreBase
{
  scores = new ScoreActions();
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
    )(ScoreForm));
}

export default _ScoreForm;

