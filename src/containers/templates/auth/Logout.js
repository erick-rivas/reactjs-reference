/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'actions/helpers/auth'

import Logout from 'components/templates/auth/Logout'

const auth = new AuthActions();

const stateToProps = (state, props) => ({
});

const dispToProps = disp => ({
  logout: callback =>
    disp(auth.logout(callback))
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Logout));
