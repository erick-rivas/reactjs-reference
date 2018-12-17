import Executor from 'actions/helpers/executor'

class Toys extends Executor
{
  constructor()
  {
    super(
      `TOY`,
      `toys`,
      state => state.toys,
    )
  }

  fetchToys = invalidate =>
    this.fetchDataSet("", invalidate);

  saveToy = (name, petId) =>
  {
    const body = ({
      name: name,
      pet_id: petId
    });
    return this.saveData(body);
  }

  deleteToy = toyId =>
    this.deleteData(toyId);
}

export default Toys;