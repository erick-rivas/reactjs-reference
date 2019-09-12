/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import ScoreDetails from 'seed/templates/scores/details/Details';
import ScoreList from 'seed/templates/scores/List';
import ScoreListOptions from 'seed/templates/scores/options/List';
import ScoreDetailsOptions from 'seed/templates/scores/options/Details';
import ScoreForm from 'seed/templates/scores/Form';

import Modal from 'seed/components/helpers/Modal';

import cls from 'resources/css/seed/templates/scores/Panel.module.css';

class ScorePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={cls.list}>
        <div className={cls.options}>
          <ScoreListOptions {...props}/>
        </div>
        <div className={cls.content}>
          <ScoreList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={cls.details}>
        <div className={cls.card}>
          <div className={cls.options}>
            <ScoreDetailsOptions {...props} />
          </div>
          <div className={cls.content}>
            <ScoreDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <ScoreForm />
      </Modal>

    return (
      <div className={cls.module}>
        <div className={cls.container}>
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
