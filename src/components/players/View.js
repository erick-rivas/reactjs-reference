/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';


import PlayerDetails from 'containers/players/Details';
import PlayerList from 'containers/players/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/players/View.module.css';

class PlayerView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <PlayerList 
        Item={Item}/>
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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default PlayerView;
