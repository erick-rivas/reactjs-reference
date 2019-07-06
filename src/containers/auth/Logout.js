/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'actions/helpers/auth'

import Logout from 'components/auth/Logout'

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
