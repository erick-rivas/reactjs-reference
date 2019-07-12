/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/players/List.module.css';

class PlayerList extends React.Component
{
  render()
  {
    const { players } = this.props;
    if (players == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const playerList = 
      this.renderPlayerList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            player={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { playerList }
    </div>
    );
  }

  /*
  * Business logic
  */

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

  /* Props */

  onItemClick()
  {
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
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getTeamId()
  {
    const { team_id } = this.props.match.params;
    const { teamId } = this.props;
    return team_id ? team_id : teamId;
  }

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

export default redux(PlayerList);
