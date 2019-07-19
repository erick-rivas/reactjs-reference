/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import ScoreDetails from 'components/templates/stats/scores/Details';
import ScoreList from 'components/templates/stats/scores/List';
import ScoreListOptions from 'components/templates/stats/scores/options/List';
import ScoreDetailsOptions from 'components/templates/stats/scores/options/Details';
import ScoreItem from 'components/templates/stats/scores/Item';
import ScoreForm from 'components/templates/stats/scores/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/templates/stats/scores/Panel.module.css';

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
        onClose={this.onFormClose}>
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
    this.onFormClose = this.onFormClose.bind(this);
  }

  /* Events */

  onFormClose()
  {
    this.props.history.goBack()
  }

}

export default ScorePanel;
