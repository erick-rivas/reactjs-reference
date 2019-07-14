/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import ScoreDetails from 'components/stats/scores/Details';
import ScoreList from 'components/stats/scores/List';
import ScoreListOptions from 'components/stats/scores/options/List';
import ScoreDetailsOptions from 'components/stats/scores/options/Details';
import ScoreItem from 'components/stats/scores/Item';
import ScoreForm from 'components/stats/scores/Form';

import Modal from 'components/helpers/Modal';

import styles from 'resources/css/stats/scores/Panel.module.css';

class ScorePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <ScoreListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <ScoreList {...props}
            Item={ScoreItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <ScoreDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <ScoreDetails {...props} />
          </div>
        </div>
      </div>

    const form = props =>
      <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <ScoreForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>   
          <Route
            path={[`${path}/:score_id(\\d+)`, `${path}`]}
            component={list} />
          <Route
            path={`${path}/:score_id(\\d+)`}
            component={details} />
        </div>

        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:score_id(\\d+)/edit`] }
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

export default ScorePanel;
