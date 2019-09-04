/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import MatchDetails from 'components/templates/matches/details/Details';
import MatchList from 'components/templates/matches/List';
import MatchListOptions from 'components/templates/matches/options/List';
import MatchDetailsOptions from 'components/templates/matches/options/Details';
import MatchForm from 'components/templates/matches/Form';

import Modal from 'seed/components/helpers/Modal';

import c from 'resources/css/templates/matches/Panel.module.css';

class MatchPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={c.list}>
        <div className={c.options}>
          <MatchListOptions {...props}/>
        </div>
        <div className={c.content}>
          <MatchList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={c.details}>
        <div className={c.card}>
          <div className={c.options}>
            <MatchDetailsOptions {...props} />
          </div>
          <div className={c.content}>
            <MatchDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <MatchForm />
      </Modal>

    return (
      <div className={c.module}>
        <div className={c.container}>
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
