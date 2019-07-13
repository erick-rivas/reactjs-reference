/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route } from 'react-router-dom';

import TeamDetails from 'components/teams/Details';
import TeamList from 'components/teams/List';
import TeamItem from 'components/teams/Item';

import styles from 'resources/css/teams/nav/View.module.css';

class TeamView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <TeamList 
        Item={TeamItem}/>
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(TeamView);

