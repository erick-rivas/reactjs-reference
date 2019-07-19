/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import TeamDetails from 'components/templates/teams/Details';
import TeamList from 'components/templates/teams/List';
import TeamListOptions from 'components/templates/teams/options/List';
import TeamDetailsOptions from 'components/templates/teams/options/Details';
import TeamItem from 'components/templates/teams/Item';
import TeamForm from 'components/templates/teams/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/templates/teams/Panel.module.css';

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

    const form = props =>
      <Modal
        match={this.props.match}
        onClose={this.onFormClose}>
        <TeamForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>   
          <Route
            path={[`${path}/:team_id(\\d+)`, `${path}`]}
            component={list} />
          <Route
            path={`${path}/:team_id(\\d+)`}
            component={details} />
        </div>

        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:team_id(\\d+)/edit`] }
          component={form} />

      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onFormClose = this.onFormClose.bind(this);
  }

  /* Events */

  onFormClose()
  {
    this.props.history.goBack()
  }

}

export default TeamPanel;
