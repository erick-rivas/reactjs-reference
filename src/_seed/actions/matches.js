/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import Executor from 'actions/helpers/executor';

class _Matches extends Executor
{
  constructor()
  {
    super(
      `MATCHES`,
      `matches`,
      state => state.matches
    )
  }

  getMatchList = (filters = {}, callback) =>
  {
    let params = '';
    for (let filter in filters) 
      if (filters[filter] != null)
        params += `${filter}=${filters[filter]}&`;
    return this.getList(`${params}`, callback);
  }

  getMatchDetails = (matchId, callback) =>
  {
    return this.getDetails(matchId, callback);
  }

  saveMatch = (match, callback) =>
  {
    return this.saveData(match, callback);
  }

  setMatch = (matchId, match, callback) =>
  {
    return this.setData(matchId, match, callback);
  }

  deleteMatch = (matchId, callback) =>
  {
    return this.deleteData(matchId, callback);
  }
}

export default _Matches;
