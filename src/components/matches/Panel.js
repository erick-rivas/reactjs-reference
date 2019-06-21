/*
__Seed builder__v1.0

  Guidelines:
    - Example component to handle navigation (divided view)
    - Recomended usage: main navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import MatchDetails from 'containers/matches/Details';
import MatchList from 'containers/matches/List';
import MatchListOptions from 'containers/matches/list/Options';
import MatchDetailsOptions from 'containers/matches/details/Options';

import Item from 'components/helpers/Item';


import styles from 'util/css/matches/Panel.module.css';

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
          Item={Item} />
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
