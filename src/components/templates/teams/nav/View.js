/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import TeamDetails from 'containers/templates/teams/Details';
import TeamList from 'containers/templates/teams/List';
import TeamItem from 'components/templates/teams/Item';

import Component from 'components/templates/teams/nav/View.link'

import styles from 'resources/css/templates/teams/nav/View.module.css';

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

