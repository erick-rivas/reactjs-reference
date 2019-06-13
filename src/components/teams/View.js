/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';


import TeamDetails from 'containers/teams/Details';
import TeamList from 'containers/teams/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/teams/View.module.css';

class TeamView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <TeamList 
        Item={Item}/>
      </div>
      

    const details = props =>
      <div className={styles.details}>
        <TeamDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <Switch>
         <Route
          path={`${path}/:team_id(\\d+)`}
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

export default TeamView;
