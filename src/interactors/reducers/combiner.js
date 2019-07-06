/*
__Seed builder__v1.0
  
  Guidelines:
    - Modify states via SeedManifest.yaml
    - Only add temporary states if required
      - Example: For operation purposes
 
  States:
    - players
    - teams
    - users
    - matches
    - scores
*/

import _Combiner from 'sbuild/interactors/reducers/helpers/combiner';

import Auth from 'interactors/reducers/helpers/auth';

class Combiner extends _Combiner
{
  additionalReducers = {
      auth: new Auth().reducer
  };
}

export default new Combiner().combine();

