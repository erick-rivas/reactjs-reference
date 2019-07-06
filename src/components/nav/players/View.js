/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import PlayerDetails from 'containers/players/Details';
import PlayerList from 'containers/players/List';
import PlayerItem from 'components/players/Item';

import Component from 'components/nav/players/View.link.js'

import styles from 'resources/css/nav/players/View.module.css';

class PlayerView extends Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <PlayerList 
        Item={PlayerItem}/>
      </div>

    const details = props =>
      <div className={styles.details}>
        <PlayerDetails />
      </div>
   
    return (
      <div className={styles.module}>
        
        <div className={styles.container}>
          <Switch>
           <Route
            path={`${path}/:player_id(\\d+)`}
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

export default PlayerView;

