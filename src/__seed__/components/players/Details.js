/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _PlayerDetails extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      player: {}
    }
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getPlayerDetails } = this.props;
    const playerId = this.getPlayerId()
    if (getPlayerDetails != null)
      getPlayerDetails(playerId);
  }

  /* Props */

  getPlayerId() {}
}

export default _PlayerDetails;
