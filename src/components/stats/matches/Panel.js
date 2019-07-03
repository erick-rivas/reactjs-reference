/*
__Seed builder__v1.0

  Guidelines:
    - EXAMPLE component to handle navigation (divided view)
    - Recomended usage: main navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'containers/stats/matches/Details';
import MatchList from 'containers/stats/matches/List';
import MatchListOptions from 'containers/stats/matches/list/Options';
import MatchDetailsOptions from 'containers/stats/matches/details/Options';
import MatchItem from 'components/stats/matches/Item';

import styles from 'util/css/stats/matches/Panel.module.css';

class MatchPanel extends React.Component
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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default MatchPanel;
