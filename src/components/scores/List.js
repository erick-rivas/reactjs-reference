/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _ScoreList from '__seed__/components/scores/List'
import Item from 'components/scores/Item'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/List.module.css'

class ScoreList extends _ScoreList
{
  render()
  {
    const { scores } = this.props;

    if (scores == null) return <Loading />
    const scoreItems = scores.map(item =>
        <div className={styles.item}>
          <Item key={item.id} score={item} />
        </div>
    );

    return (
      <div className={styles.module}>
      { scoreItems }
      </div>
    );
  }

  getFilters() 
  {
    return {}
  }
}

export default ScoreList;
