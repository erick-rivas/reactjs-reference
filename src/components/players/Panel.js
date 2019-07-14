/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import PlayerDetails from 'components/players/Details';
import PlayerList from 'components/players/List';
import PlayerListOptions from 'components/players/options/List';
import PlayerDetailsOptions from 'components/players/options/Details';
import PlayerItem from 'components/players/Item';

import styles from 'resources/css/players/Panel.module.css';

class PlayerPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <PlayerListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <PlayerList {...props}
            Item={PlayerItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <PlayerDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <PlayerDetails {...props} />
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
            path={`${path}/:player_id(\\d+)`}
            component={details} />
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

export default PlayerPanel;
