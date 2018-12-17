import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ToyActions from 'actions/toys'

import ToyList from 'components/ToyList'


const toys = new ToyActions();

const stateToProps = state => ({
  pets: state.pets.dataSet,
  toys: state.toys.dataSet,
  didSet: state.toys.didSet
});

const dispToProps = disp => ({
  fetchToys: () =>
    disp(toys.fetchToys()),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(ToyList));