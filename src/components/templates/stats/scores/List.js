/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';
import Item from 'components/templates/stats/scores/details/Item';

import styles from 'resources/css/templates/stats/scores/List.module.css';

class ScoreList extends React.Component
{
  render()
  {
    const scores = Util.filter(this.props.scores, {});
    if (scores == null) return <Loading />;

    const { url } = this.props.match;

    const scoreList = scores.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}>
          <Item 
            key={item.id} 
            id={item.id}
            score={item}/>
      </NavLink>);

    return (
      <div className={styles.module}>
        { scoreList }
      </div>
    );
  }

  /*
  * Component logic
  */
  
  componentDidMount()
  {
    this.props.getScoreList({});
  }
}

export default redux(ScoreList);
