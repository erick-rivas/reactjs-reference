/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import PlayerDetails from 'containers/players/Details';
import PlayerList from 'containers/players/List';
import PlayerListOptions from 'containers/players/ListOptions';
import PlayerDetailsOptions from 'containers/players/DetailsOptions';
import PlayerItem from 'components/players/Item';

import Component from 'components/nav/players/Panel.link.js'

import styles from 'resources/css/nav/players/Panel.module.css';

class PlayerPanel extends Component
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
}

export default PlayerPanel;
