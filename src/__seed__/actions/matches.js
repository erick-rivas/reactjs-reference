/*
__Seed builder__v1.0
*/

import Executor from 'actions/helpers/executor'

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

  getMatchList = (filters = {}) =>
  {
    let params = '';
    for (let filter in filters) 
      params += `{filter}=${filters[filter]}&`;
    return this.getList(`${params}`);
  }

  getMatchDetails = matchId =>
  {
    return this.getDetails(matchId);
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
