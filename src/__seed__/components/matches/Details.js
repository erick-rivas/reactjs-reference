/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _MatchDetails extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      match: {}
    }
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getMatchDetails } = this.props;
    const matchId = this.getMatchId()
    if (getMatchDetails != null)
      getMatchDetails(matchId);
  }

  /* Props */

  getMatchId() {}
}

export default _MatchDetails;
