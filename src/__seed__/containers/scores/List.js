/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ScoreActions from 'actions/scores'

import ScoreList from 'components/scores/List'

class _ScoreList
{
  scores = new ScoreActions();

  _states = state => ({
    user: state.auth.user,
    scores: state.scores.dataset,
  });

  _disps = disp => ({
    getScoreList: filters =>
      disp(this.scores.getScoreList(filters)),
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
    )(ScoreList));
}

export default _ScoreList;
