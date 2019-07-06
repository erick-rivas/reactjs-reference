/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'actions/helpers/auth'

import Login from 'components/auth/Login'

const auth = new AuthActions();

const stateToProps = (state, props) => ({
});

const dispToProps = disp => ({
  login: (email, password, callback) =>
    disp(auth.login(email, password, callback))
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Login));
