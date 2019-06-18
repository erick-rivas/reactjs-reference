/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import * as DataUtil from 'util/DataUtil';
import Modal from 'components/helpers/Modal';
import PlayerForm from 'containers/players/Form';

class _PlayerList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        team_id: this.getTeamId(), 
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
    const { getPlayerList } = this.props;
    getPlayerList(this.state.filters);
  }


  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    return user_id == 0 ? 
      sessionStorage.getItem('id') : null;
  }
  getTeamId()
  {
    const { team_id } = this.props.match.params;
    const { teamId } = this.props;
    return team_id ? team_id : teamId;
  }  


  /* Events */

  onItemClick(){}


   /* Components */

  renderPlayerList(map)
  {
    const { players = [] } = this.props;
    const dataset = DataUtil
      .filter(players, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }
  
}
export default _PlayerList;
