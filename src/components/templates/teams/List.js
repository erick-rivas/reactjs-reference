/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/teams/List.module.css';

class TeamList extends React.Component
{
  render()
  {
    const { teams } = this.props;
    if (teams == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const teamList = 
      this.renderTeamList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onClickItem}>
          <Item 
            key={item.id} 
            id={item.id}
            team={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { teamList }
    </div>
    );
  }

  renderTeamList(map)
  {
    const { teams = [] } = this.props;
    const dataset = DataUtil
      .filter(teams, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }

  /*
  * Component logic
  */

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
    this.onClickItem = this.onClickItem.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Events */

  onClickItem(){}

  /* Actions */
  
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
}

export default redux(TeamList);
