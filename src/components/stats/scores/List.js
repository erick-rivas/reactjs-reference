/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and filtering
    - To filter data modify filters with router params or props
    - Modify ALL components if required

  Filters:
    - user_id
    - player_id
    - match_id
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _ScoreList from '_seed/components/stats/scores/List';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/stats/scores/List.module.css';

class ScoreList extends _ScoreList
{
  render()
  {
    const { scores } = this.props;
    if (scores == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const scoreList = 
      this.renderScoreList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            score={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { scoreList }
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(scoreId)
  {
  }
}

export default ScoreList;
