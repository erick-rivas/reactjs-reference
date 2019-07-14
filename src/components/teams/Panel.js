/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import TeamDetails from 'components/teams/Details';
import TeamList from 'components/teams/List';
import TeamListOptions from 'components/teams/options/List';
import TeamDetailsOptions from 'components/teams/options/Details';
import TeamItem from 'components/teams/Item';

import styles from 'resources/css/teams/Panel.module.css';

class TeamPanel extends React.Component
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default TeamPanel;
