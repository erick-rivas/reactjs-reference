/*
__Seed builder__v1.0

  Guidelines:
    - Example component to handle navigation (divided view)
    - Recomended usage: main navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import TeamDetails from 'containers/teams/Details';
import TeamList from 'containers/teams/List';
import TeamListOptions from 'containers/teams/list/Options';
import TeamDetailsOptions from 'containers/teams/details/Options';
import TeamItem from 'components/teams/Item';

import styles from 'util/css/teams/Panel.module.css';

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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default TeamPanel;
