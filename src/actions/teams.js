/*
__Seed builder__v1.0
*/

import _Teams from 'seed/actions/teams';

class Teams extends _Teams 
{
  constructor()
  {
    const fetch = [
      "rival.*",
      "players.*",
    ]
    super(fetch)
  }
}

export default Teams;
