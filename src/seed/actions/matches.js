/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _Matches extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
        "local.*",
        "visitor.*",
        "scores.*",
      ];

    super(
      `MATCHES`,
      `matches`,
      state => state.matches,
      fetch
    )
  }

  getMatchList(params = {}, callback)
  {
    return this.getList('', params, callback);
  }

  getMatchDetails(matchId, callback)
  {
    return this.getDetails('', matchId, callback);
  }

  saveMatch(match, callback)
  {
    return this.postData('', match, callback);
  }

  setMatch(matchId, match, callback)
  {
    return this.putData('', matchId, match, callback);
  }

  deleteMatch(matchId, callback)
  {
    return this.deleteData('', matchId, callback);
  }
}

export default _Matches;
