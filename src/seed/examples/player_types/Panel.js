/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import PlayerTypeDetails from 'seed/examples/player_types/details/Details';
import PlayerTypeList from 'seed/examples/player_types/List';
import PlayerTypeListOptions from 'seed/examples/player_types/options/List';
import PlayerTypeDetailsOptions from 'seed/examples/player_types/options/Details';
import PlayerTypeForm from 'seed/examples/player_types/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/seed/examples/player_types/Panel.module.css';

function PlayerTypePanel(props)
{
  const { path, url } = props.match;

  const List = props =>
    <div className={styles.list}>
      <div className={styles.options}>
        <PlayerTypeListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <PlayerTypeList {...props} />
      </div>
    </div>

  const Details = props =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <PlayerTypeDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <PlayerTypeDetails {...props} />
        </div>
      </div>
    </div>

  const Form = props =>
    <Modal {...props}>
      <PlayerTypeForm />
    </Modal>

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:player_type_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:player_type_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default PlayerTypePanel;
