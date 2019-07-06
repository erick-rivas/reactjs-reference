/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import MatchDetails from 'containers/stats/matches/Details';
import MatchList from 'containers/stats/matches/List';
import MatchItem from 'components/stats/matches/Item';

import Component from 'components/nav/stats/matches/View.link.js'

import styles from 'resources/css/nav/stats/matches/View.module.css';

class MatchView extends Component
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
}

export default MatchView;

