/*
__Seed builder__v1.0
*/

import _TeamDetails from '_seed/containers/teams/Details';

class TeamDetails extends _TeamDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new TeamDetails().getRouter()
