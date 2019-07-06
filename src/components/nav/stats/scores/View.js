/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import ScoreDetails from 'containers/stats/scores/Details';
import ScoreList from 'containers/stats/scores/List';
import ScoreItem from 'components/stats/scores/Item';

import Component from 'components/nav/stats/scores/View.link.js'

import styles from 'resources/css/nav/stats/scores/View.module.css';

class ScoreView extends Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <ScoreList 
        Item={ScoreItem}/>
      </div>

    const details = props =>
      <div className={styles.details}>
        <ScoreDetails />
      </div>
   
    return (
      <div className={styles.module}>
        
        <div className={styles.container}>
          <Switch>
           <Route
            path={`${path}/:score_id(\\d+)`}
            component={details} />
            <Route
              path={`${path}`}
              component={list} />
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default ScoreView;

