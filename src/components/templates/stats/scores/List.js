/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/templates/stats/scores/List.link';

import styles from 'resources/css/templates/stats/scores/List.module.css';

class ScoreList extends Component
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
}

export default ScoreList;
