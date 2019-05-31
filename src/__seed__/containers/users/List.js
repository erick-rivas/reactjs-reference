/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserActions from 'actions/users'

import UserList from 'components/users/List'

class _UserList
{
  users = new UserActions();

  _states = state => ({
    user: state.auth.user,
    users: state.users.dataset,
  });

  _disps = disp => ({
    getUserList: filters =>
      disp(this.users.getUserList(filters)),
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
    )(UserList));
}

export default _UserList;
