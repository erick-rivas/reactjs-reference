/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route } from 'react-router-dom';

import PlayerDetails from 'components/templates/players/Details';
import PlayerList from 'components/templates/players/List';
import PlayerItem from 'components/templates/players/Item';

import styles from 'resources/css/templates/players/nav/View.module.css';

class PlayerView extends React.Component
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(PlayerView);

