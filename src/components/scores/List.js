/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _ScoreList from '_seed/components/scores/List';
import Options from 'components/scores/list/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/List.module.css';

class ScoreList extends _ScoreList
{
  render()
  {
    const { scores } = this.props;
    if (scores == null) return <Loading />;

    const { Item } = this.props;
    const { showOptions = true } = this.props;
    const { url } = this.props.match;

    const options = showOptions ? 
      <div className={styles.options}>
        <Options match={this.props.match} />
      </div>: null;

    // Important customize
    const scoreList = this.renderScoreList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            title={item.id}
            subtitle={JSON.stringify(item)}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { options }
      <div className={styles.list}>
        { scoreList }
      </div>
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
