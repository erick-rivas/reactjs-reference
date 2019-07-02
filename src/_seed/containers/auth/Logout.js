
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'interactors/actions/helpers/auth'

import Logout from 'components/auth/Logout'

class _Logout
{
  auth = new AuthActions();

  _states = (state, props) => ({
  });

  _disps = disp => ({
    logout: callback =>
      disp(this.auth.logout(callback))
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
    )(Logout));
}

export default _Logout;

