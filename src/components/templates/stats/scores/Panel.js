/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import ScoreDetails from 'components/templates/stats/scores/Details';
import ScoreTable from 'components/templates/stats/scores/Table';
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
   
    const List =
      <div className={styles.list}>
        <div className={styles.options}>
          <ScoreListOptions {...this.props}/>
        </div>
        <div className={styles.content}>
          <ScoreList {...this.props}
            Item={ScoreItem} />
        </div>
      </div>

    const Table =
      <div className={styles.table}>
        <div className={styles.options}>
          <ScoreListOptions {...this.props}/>
        </div>
        <div className={styles.content}>
          <ScoreTable  {...this.props} />
        </div>
      </div>

    const Details = props =>
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

    const Form = props =>
      <Modal
        {...this.props}>
        <ScoreForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {Table}
          <Route
            path={`${path}/:score_id(\\d+)`}
            component={Details} />
        </div>
        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:score_id(\\d+)/edit`] }
          component={Form} />
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
  }
}

export default ScorePanel;
