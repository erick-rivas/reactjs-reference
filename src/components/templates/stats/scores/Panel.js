/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import ScoreDetails from 'components/templates/stats/scores/details/Details';
import ScoreList from 'components/templates/stats/scores/List';
import ScoreListOptions from 'components/templates/stats/scores/options/List';
import ScoreDetailsOptions from 'components/templates/stats/scores/options/Details';
import ScoreForm from 'components/templates/stats/scores/Form';

import Modal from 'seed/components/helpers/Modal';

import c from 'resources/css/templates/stats/scores/Panel.module.css';

class ScorePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={c.list}>
        <div className={c.options}>
          <ScoreListOptions {...props}/>
        </div>
        <div className={c.content}>
          <ScoreList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={c.details}>
        <div className={c.card}>
          <div className={c.options}>
            <ScoreDetailsOptions {...props} />
          </div>
          <div className={c.content}>
            <ScoreDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <ScoreForm />
      </Modal>

    return (
      <div className={c.module}>
        <div className={c.container}>
          <List />
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
}

export default ScorePanel;
