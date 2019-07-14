/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import MatchDetails from 'components/stats/matches/Details';
import MatchList from 'components/stats/matches/List';
import MatchListOptions from 'components/stats/matches/options/List';
import MatchDetailsOptions from 'components/stats/matches/options/Details';
import MatchItem from 'components/stats/matches/Item';
import MatchForm from 'components/stats/matches/Form';

import Modal from 'components/helpers/Modal';

import styles from 'resources/css/stats/matches/Panel.module.css';

class MatchPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <MatchListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <MatchList {...props}
            Item={MatchItem} />
        </div>
      </div>

    const details = props =>
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

    const form = props =>
      <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <MatchForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>   
          <Route
            path={[`${path}/:match_id(\\d+)`, `${path}`]}
            component={list} />
          <Route
            path={`${path}/:match_id(\\d+)`}
            component={details} />
        </div>

        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:match_id(\\d+)/edit`] }
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
    this.onModalClose = this.onModalClose.bind(this);
  }

  /* Events */

  onModalClose()
  {
    this.props.history.goBack()
  }

}

export default MatchPanel;
