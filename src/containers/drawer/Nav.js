import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PetActions from 'actions/pets'

import Nav from 'components/drawer/Nav'

const pets = new PetActions();

const stateToProps = state => ({
  pets: state.pets.dataSet,
  didSave: state.pets.didSave,
});

const dispToProps = disp => ({
  fetchPets: () =>
    disp(pets.fetchPets()),
  savePet: name =>
    disp(pets.savePet(name)),
  ackSave: () =>
    disp(pets.ackSave())
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Nav));