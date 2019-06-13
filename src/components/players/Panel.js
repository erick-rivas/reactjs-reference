/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import PlayerDetails from 'containers/players/Details';
import PlayerList from 'containers/players/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/players/Panel.module.css';

class PlayerPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <PlayerList 
        Item={Item} />

    const details = props =>
      <div className={styles.details_container}>
        <PlayerDetails />
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
          path={`${path}/:player_id(\\d+)`}
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

export default PlayerPanel;
