import Executor from 'actions/executor'

class Pets extends Executor
{
  constructor()
  {
    super(
      `PET`,
      `pets`,
      state => state.pets,
    )
  }

  fetchPets = invalidate =>
    this.fetchDataSet(invalidate);

  savePet = (name) =>
  {
    const body = ({
      name: name
    });
    return this.saveData(body);
  }
}

export default Pets;