/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class _TeamDetails extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.onBackClick = this.onBackClick.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getTeamDetails } = this.props;
    const teamId = this.getTeamId()
    getTeamDetails(teamId);
  }

  /* Args */

  getTeamId() 
  {
    const { team_id } = this.props.match.params;
    const { teamId } = this.props;
    return team_id ? team_id : teamId;
  }

  /* Events */

  onBackClick() {}
}

export default _TeamDetails;
