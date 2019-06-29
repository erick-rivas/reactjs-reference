/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class _MatchDetails extends React.Component
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
    const { getMatchDetails } = this.props;
    const matchId = this.getMatchId()
    getMatchDetails(matchId);
  }

  /* Args */

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }

  /* Events */

  onBackClick() {}
}

export default _MatchDetails;
