/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import ScoreDetails from 'containers/templates/stats/scores/Details';
import ScoreList from 'containers/templates/stats/scores/List';
import ScoreItem from 'components/templates/stats/scores/Item';

import Component from 'components/templates/stats/scores/nav/View.link'

import styles from 'resources/css/templates/stats/scores/nav/View.module.css';

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

