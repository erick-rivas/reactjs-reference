/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';
import Modal from 'components/helpers/Modal';
import ScoreForm from 'containers/stat/scores/Form';

class _ScoreList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        player_id: this.getPlayerId(),
        match_id: this.getMatchId(), 
      }
    };
    this.onItemClick = this.onItemClick.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getScoreList } = this.props;
    getScoreList(this.state.filters);
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getPlayerId()
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }
  getMatchId()
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }

  /* Events */

  onItemClick(){}

   /* Components */

  renderScoreList(map)
  {
    const { scores = [] } = this.props;
    const dataset = DataUtil
      .filter(scores, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }
  
}
export default _ScoreList;
