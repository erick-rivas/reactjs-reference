/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import MatchDetails from 'containers/matches/Details';
import MatchList from 'containers/matches/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/matches/Panel.module.css';

class MatchPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <MatchList 
        Item={Item} />

    const details = props =>
      <div className={styles.details_container}>
        <MatchDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <div className={styles.list}>
          <Route
            path={`${path}`}
            component={list} />
        </div>
      <div className={styles.details}>
        <Route
          path={`${path}/:match_id(\\d+)`}
          component={details} />
      </div>
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
