import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthActions from 'actions/auth'

import Login from 'components/Login'

class Container extends Login
{
  componentDidMount()
  {
    this.setState(s => ({
      onLogin: this.onLogin
    }));
  }

  // Events

  onLogin = e =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let callback = (logged) =>
    {
      if (logged)
        this.props.history.push('/');
      else this.setState(s => ({
        error: "Invalid user or password"
      }));
    }
    this.props.login(email, password, callback);
  }
}

const auth = new AuthActions();

const stateToProps = state => ({});

const dispToProps = disp => ({
  login: (user, password, callback) =>
    disp(auth.login(user, password, callback))
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Container));