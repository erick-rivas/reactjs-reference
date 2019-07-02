/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and filtering
    - To filter data modify filters with router params or props
    - Modify ALL components if required

  Filters:
    - user_id
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _TeamList from '_seed/components/teams/List';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/List.module.css';

class TeamList extends _TeamList
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
          onClick={this.onItemClick}>
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

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(teamId)
  {
  }
}

export default TeamList;
