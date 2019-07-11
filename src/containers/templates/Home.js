/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Home from 'components/templates/Home'

const stateToProps = (state, props) => ({
});

const dispToProps = disp => ({
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Home));
