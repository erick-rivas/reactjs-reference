/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import TeamDetails from 'seed/examples/teams/details/Details';
import TeamList from 'seed/examples/teams/List';
import TeamListOptions from 'seed/examples/teams/options/List';
import TeamDetailsOptions from 'seed/examples/teams/options/Details';
import TeamForm from 'seed/examples/teams/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/seed/examples/teams/Panel.module.css';

function TeamPanel(props)
{
  const { path, url } = props.match;

  const List = props =>
    <div className={styles.list}>
      <div className={styles.options}>
        <TeamListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <TeamList {...props} />
      </div>
    </div>

  const Details = props =>
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

  const Form = props =>
    <Modal {...props}>
      <TeamForm />
    </Modal>

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:team_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:team_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default TeamPanel;
