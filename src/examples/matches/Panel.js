/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'examples/matches/Details';
import MatchList from 'examples/matches/List';
import MatchListOptions from 'examples/matches/options/List';
import MatchDetailsOptions from 'examples/matches/options/Details';
import MatchForm from 'examples/matches/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/examples/matches/Panel.module.css';

function MatchPanel(props)
{
  const { path, url } = props.match;

  const List = props =>
    <div className={styles.list}>
      <div className={styles.options}>
        <MatchListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <MatchList {...props} />
      </div>
    </div>

  const Details = props =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <MatchDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <MatchDetails {...props} />
        </div>
      </div>
    </div>

  const Form = props =>
    <Modal {...props}>
      <MatchForm />
    </Modal>

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:match_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:match_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default MatchPanel;
