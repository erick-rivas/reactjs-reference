/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import PlayerDetails from 'containers/templates/players/Details';
import PlayerList from 'containers/templates/players/List';
import PlayerItem from 'components/templates/players/Item';

import Component from 'components/templates/players/nav/View.link'

import styles from 'resources/css/templates/players/nav/View.module.css';

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

