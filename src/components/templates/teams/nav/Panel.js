/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import TeamDetails from 'containers/templates/teams/Details';
import TeamList from 'containers/templates/teams/List';
import TeamListOptions from 'containers/templates/teams/options/List';
import TeamDetailsOptions from 'containers/templates/teams/options/Details';
import TeamItem from 'components/templates/teams/Item';

import Component from 'components/templates/teams/nav/Panel.link'

import styles from 'resources/css/templates/teams/nav/Panel.module.css';

class TeamPanel extends Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <TeamListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <TeamList {...props}
            Item={TeamItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <TeamDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <TeamDetails {...props} />
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
            path={`${path}/:team_id(\\d+)`}
            component={details} />
        </div>
      </div>
    );
  }
}

export default TeamPanel;
