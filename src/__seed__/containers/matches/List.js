/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MatchActions from 'actions/matches'

import MatchList from 'components/matches/List'

class _MatchList
{
  matches = new MatchActions();

  _states = state => ({
    user: state.auth.user,
    matches: state.matches.dataset,
  });

  _disps = disp => ({
    getMatchList: filters =>
      disp(this.matches.getMatchList(filters)),
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
    )(MatchList));
}

export default _MatchList;
