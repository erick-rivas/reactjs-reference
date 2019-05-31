/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _MatchList from '__seed__/components/matches/List'
import Item from 'components/matches/Item'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/List.module.css'

class MatchList extends _MatchList
{
  render()
  {
    const { matches } = this.props;

    if (matches == null) return <Loading />
    const matchItems = matches.map(item =>
        <div className={styles.item}>
          <Item key={item.id} match={item} />
        </div>
    );

    return (
      <div className={styles.module}>
      { matchItems }
      </div>
    );
  }

  getFilters() 
  {
    return {}
  }
}

export default MatchList;
