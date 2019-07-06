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

import _Combiner from 'sbuild/reducers/combiner';

import Auth from 'reducers/helpers/auth';

class Combiner extends _Combiner
{
  additionalReducers = {
      auth: new Auth().reducer
  };
}

export default new Combiner().combine();
