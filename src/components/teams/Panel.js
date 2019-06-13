/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import TeamDetails from 'containers/teams/Details';
import TeamList from 'containers/teams/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/teams/Panel.module.css';

class TeamPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <TeamList 
        Item={Item} />

    const details = props =>
      <div className={styles.details_container}>
        <TeamDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <div className={styles.list}>
          <Route
            path={`${path}`}
            component={list} />
        </div>
      <div className={styles.details}>
        <Route
          path={`${path}/:team_id(\\d+)`}
          component={details} />
      </div>
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
