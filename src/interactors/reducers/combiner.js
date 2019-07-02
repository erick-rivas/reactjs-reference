/*
__Seed builder__v1.0
  
  Guidelines:
    - Modify states via SeedManifest.yaml
    - Only add temporary states if required
      - Example: For operation purposes
 
  States:
    - users
    - teams
    - players
    - matches
    - scores
*/

import _Combiner from '_seed/interactors/reducers/helpers/combiner';

import Auth from 'interactors/reducers/helpers/auth';

class Combiner extends _Combiner
{
  additionalReducers = {
      auth: new Auth().reducer
  };
}

export default new Combiner().combine();

