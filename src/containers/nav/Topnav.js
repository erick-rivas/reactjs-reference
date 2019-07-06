/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Topnav from 'components/nav/Topnav'

const stateToProps = (state, props) => ({
});

const dispToProps = disp => ({
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Topnav));