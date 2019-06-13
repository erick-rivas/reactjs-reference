
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'actions/helpers/auth'

import Login from 'components/auth/Login'

class _Login
{
  auth = new AuthActions();

  _states = (state, props) => ({
  });

  _disps = disp => ({
    login: (email, password, callback) =>
      disp(this.auth.login(email, password, callback))
  })

  states = state => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._states(state, props), ...this.states(state, props)
  });

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(Login));
}

export default _Login;

