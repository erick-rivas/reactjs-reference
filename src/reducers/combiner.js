/*
__Seed builder__v1.0
  States:
    - users
    - teams
    - players
    - matches
    - scores
*/

import _Combiner from '__seed__/reducers/helpers/combiner'

import Auth from 'reducers/helpers/auth'

class Combiner extends _Combiner
{
  additionalReducers = {
      auth: new Auth().reducer
  }
}

export default new Combiner().combine();
