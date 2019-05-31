/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'

import TeamList from 'components/teams/List'

class _TeamList
{
  teams = new TeamActions();

  _states = state => ({
    user: state.auth.user,
    teams: state.teams.dataset,
  });

  _disps = disp => ({
    getTeamList: filters =>
      disp(this.teams.getTeamList(filters)),
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
    )(TeamList));
}

export default _TeamList;
