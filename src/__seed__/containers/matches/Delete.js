/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MatchActions from 'actions/matches'

import MatchDelete from 'components/matches/Delete'
import * as Util from 'containers/helpers/Util'


class _MatchDelete
{
  matches = new MatchActions();

  _states = (state, props) => ({
    user: state.auth.user,
  });
  
  _disps = disp => ({
    deleteMatch: matchId =>
      disp(this.matches.deleteMatch(matchId)),
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
    )(MatchDelete));
}

export default _MatchDelete;
