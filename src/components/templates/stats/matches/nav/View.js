/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route } from 'react-router-dom';

import MatchDetails from 'components/templates/stats/matches/Details';
import MatchList from 'components/templates/stats/matches/List';
import MatchItem from 'components/templates/stats/matches/Item';

import styles from 'resources/css/templates/stats/matches/nav/View.module.css';

class MatchView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <MatchList 
        Item={MatchItem}/>
      </div>

    const details = props =>
      <div className={styles.details}>
        <MatchDetails />
      </div>
   
    return (
      <div className={styles.module}>
        
        <div className={styles.container}>
          <Switch>
           <Route
            path={`${path}/:match_id(\\d+)`}
            component={details} />
            <Route
              path={`${path}`}
              component={list} />
          </Switch>
        </div>
        
      </div>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(MatchView);

