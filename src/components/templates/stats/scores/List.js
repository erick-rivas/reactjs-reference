/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/stats/scores/List.module.css';

class ScoreList extends React.Component
{
  render()
  {
    const { scores = [] } = this.props;
    if (scores == null) return <Loading />;

    const { Item } = this.props;
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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
  
  componentDidMount()
  {
    this.props.getScoreList();
  }
}

export default redux(ScoreList);
