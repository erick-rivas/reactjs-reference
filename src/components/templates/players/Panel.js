/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import PlayerDetails from 'components/templates/players/Details';
import PlayerList from 'components/templates/players/List';
import PlayerListOptions from 'components/templates/players/options/List';
import PlayerDetailsOptions from 'components/templates/players/options/Details';
import PlayerItem from 'components/templates/players/Item';
import PlayerForm from 'components/templates/players/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/templates/players/Panel.module.css';

class PlayerPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <PlayerListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <PlayerList {...props}
            Item={PlayerItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <PlayerDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <PlayerDetails {...props} />
          </div>
        </div>
      </div>

    const form = props =>
      <Modal
        match={this.props.match}
        onClose={this.onFormClose}>
        <PlayerForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>   
          <Route
            path={[`${path}/:player_id(\\d+)`, `${path}`]}
            component={list} />
          <Route
            path={`${path}/:player_id(\\d+)`}
            component={details} />
        </div>

        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:player_id(\\d+)/edit`] }
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

export default PlayerPanel;
