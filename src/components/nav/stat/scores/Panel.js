/*
__Seed builder__v1.0

  Guidelines:
    - EXAMPLE component to handle navigation (divided view)
    - Recomended usage: main navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import ScoreDetails from 'containers/stat/scores/Details';
import ScoreList from 'containers/stat/scores/List';
import ScoreListOptions from 'containers/stat/scores/list/Options';
import ScoreDetailsOptions from 'containers/stat/scores/details/Options';
import ScoreItem from 'components/stat/scores/Item';

import styles from 'util/css/nav/stat/scores/Panel.module.css';

class ScorePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
    <div className={styles.list}>
      <div className={styles.options}>
        <ScoreListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <ScoreList {...props}
          Item={ScoreItem} />
      </div>
    </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <ScoreDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <ScoreDetails {...props} />
          </div>
        </div>
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>        
        <Route
          path={`${path}`}
          component={list} />
        <Route
          path={`${path}/:score_id(\\d+)`}
          component={details} />
      </div>
      
    </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default ScorePanel;
