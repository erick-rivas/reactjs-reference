/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import TeamDetails from 'containers/teams/Details';
import TeamList from 'containers/teams/List';
import TeamItem from 'components/teams/Item';

import Component from 'components/teams/nav/View.link'

import styles from 'resources/css/teams/nav/View.module.css';

class TeamView extends Component
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
}

export default TeamView;

