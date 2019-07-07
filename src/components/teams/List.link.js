/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';
import Modal from 'components/helpers/Modal';
import TeamForm from 'containers/teams/Form';

class _TeamList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        rival_id: this.getRivalId(),
        players_id: this.getPlayersId(), 
      }
    };
    this.onItemClick = this.onItemClick.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Props */

  onItemClick()
  {
  }
  
  loadData = () =>
  {
    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
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
  getRivalId()
  {
    const { rival_id } = this.props.match.params;
    const { rivalId } = this.props;
    return rival_id ? rival_id : rivalId;
  }
  getPlayersId()
  {
    const { players_id } = this.props.match.params;
    const { playersId } = this.props;
    return players_id ? players_id : playersId;
  }

   /* Components */

  renderTeamList(map)
  {
    const { teams = [] } = this.props;
    const dataset = DataUtil
      .filter(teams, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }
  
}
export default _TeamList;
