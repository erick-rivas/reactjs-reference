/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'seed/templates/matches/details/Details';
import MatchList from 'seed/templates/matches/List';
import MatchListOptions from 'seed/templates/matches/options/List';
import MatchDetailsOptions from 'seed/templates/matches/options/Details';
import MatchForm from 'seed/templates/matches/Form';

import Modal from 'seed/components/helpers/Modal';

import cls from 'resources/css/seed/templates/matches/Panel.module.css';

class MatchPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={cls.list}>
        <div className={cls.options}>
          <MatchListOptions {...props}/>
        </div>
        <div className={cls.content}>
          <MatchList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={cls.details}>
        <div className={cls.card}>
          <div className={cls.options}>
            <MatchDetailsOptions {...props} />
          </div>
          <div className={cls.content}>
            <MatchDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <MatchForm />
      </Modal>

    return (
      <div className={cls.module}>
        <div className={cls.container}>
          <List />
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
