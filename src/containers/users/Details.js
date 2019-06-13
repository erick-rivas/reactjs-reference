/*
__Seed builder__v1.0
*/

import _UserDetails from '_seed/containers/users/Details';

class UserDetails extends _UserDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserDetails().getRouter()
