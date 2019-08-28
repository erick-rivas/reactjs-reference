/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'components/templates/stats/matches/details/Details';
import MatchList from 'components/templates/stats/matches/List';
import MatchListOptions from 'components/templates/stats/matches/options/List';
import MatchDetailsOptions from 'components/templates/stats/matches/options/Details';
import MatchForm from 'components/templates/stats/matches/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/templates/stats/matches/Panel.module.css';

class MatchPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List =
      <div className={styles.list}>
        <div className={styles.options}>
          <MatchListOptions {...this.props}/>
        </div>
        <div className={styles.content}>
          <MatchList {...this.props} />
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
      <Modal
        {...this.props}>
        <MatchForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {List}
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
}

export default MatchPanel;
