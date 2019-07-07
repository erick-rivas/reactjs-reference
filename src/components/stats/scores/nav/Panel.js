/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import ScoreDetails from 'containers/stats/scores/Details';
import ScoreList from 'containers/stats/scores/List';
import ScoreListOptions from 'containers/stats/scores/options/List';
import ScoreDetailsOptions from 'containers/stats/scores/options/Details';
import ScoreItem from 'components/stats/scores/Item';

import Component from 'components/stats/scores/nav/Panel.link'

import styles from 'resources/css/stats/scores/nav/Panel.module.css';

class ScorePanel extends Component
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
}

export default ScorePanel;
