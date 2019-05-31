/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _TeamList from '__seed__/components/teams/List'
import Item from 'components/teams/Item'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/List.module.css'

class TeamList extends _TeamList
{
  render()
  {
    const { teams } = this.props;

    if (teams == null) return <Loading />
    const teamItems = teams.map(item =>
        <div className={styles.item}>
          <Item key={item.id} team={item} />
        </div>
    );

    return (
      <div className={styles.module}>
      { teamItems }
      </div>
    );
  }

  getFilters() 
  {
    return {}
  }
}

export default TeamList;
