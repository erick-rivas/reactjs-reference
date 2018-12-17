import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ToyActions from 'actions/toys'

import Details from 'components/toy/Details'


const toys = new ToyActions();

const stateToProps = state => ({
  toy: state.toys.data,
  didSet: state.toys.didSet,
  didDelete: state.toys.didDelete
});

const dispToProps = disp => ({
  fetchToy: toyId =>
    disp(toys.fetchToy(toyId)),
  deleteToy: toyId =>
    disp(toys.deleteToy(toyId)),
  ackDelete: () =>
    disp(toys.ackDelete())
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Details));