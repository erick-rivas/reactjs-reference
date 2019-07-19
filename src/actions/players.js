/*
__Seed builder__v1.0
*/

import _Players from 'seed/actions/players';

class Players extends _Players 
{
  constructor()
  {
    const fetch = [
      "team.*",
    ]
    super(fetch)
  }
}

export default Players;
