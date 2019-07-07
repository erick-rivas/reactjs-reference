/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'containers/stats/matches/Details';
import MatchList from 'containers/stats/matches/List';
import MatchListOptions from 'containers/stats/matches/options/List';
import MatchDetailsOptions from 'containers/stats/matches/options/Details';
import MatchItem from 'components/stats/matches/Item';

import Component from 'components/stats/matches/nav/Panel.link'

import styles from 'resources/css/stats/matches/nav/Panel.module.css';

class MatchPanel extends Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <MatchListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <MatchList {...props}
            Item={MatchItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <MatchDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <MatchDetails {...props} />
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
            path={`${path}/:match_id(\\d+)`}
            component={details} />
        </div>
      </div>
    );
  }
}

export default MatchPanel;
