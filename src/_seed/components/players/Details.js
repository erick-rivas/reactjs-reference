/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import * as React from 'react';

class _PlayerDetails extends React.Component
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
    const { getPlayerDetails } = this.props;
    const playerId = this.getPlayerId()
    getPlayerDetails(playerId);
  }


  /* Filters */

  getPlayerId() 
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }


  /* Events */

  onBackClick() {}
}

export default _PlayerDetails;
