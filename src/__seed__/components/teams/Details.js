/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _TeamDetails extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      team: {}
    }
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getTeamDetails } = this.props;
    const teamId = this.getTeamId()
    if (getTeamDetails != null)
      getTeamDetails(teamId);
  }

  /* Props */

  getTeamId() {}
}

export default _TeamDetails;
