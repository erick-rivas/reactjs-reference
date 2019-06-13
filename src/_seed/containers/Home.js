
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Home from 'components/Home'

class _Home
{
  _states = (state, props) => ({
  });

  _disps = disp => ({
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
    )(Home));
}

export default _Home;

