/*
__Seed builder__v1.0

  Guidelines:
    - EXAMPLE component to handle navigation (single view)
    - Recomended usage: inner navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import TeamDetails from 'containers/teams/Details';
import TeamList from 'containers/teams/List';
import TeamItem from 'components/teams/Item';

import styles from 'util/css/teams/View.module.css';

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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default TeamView;
