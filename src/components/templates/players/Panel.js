/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import PlayerDetails from 'components/templates/players/details/Details';
import PlayerList from 'components/templates/players/List';
import PlayerListOptions from 'components/templates/players/options/List';
import PlayerDetailsOptions from 'components/templates/players/options/Details';
import PlayerForm from 'components/templates/players/Form';

import Modal from 'seed/components/helpers/Modal';

import c from 'resources/css/templates/players/Panel.module.css';

class PlayerPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={c.list}>
        <div className={c.options}>
          <PlayerListOptions {...props}/>
        </div>
        <div className={c.content}>
          <PlayerList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={c.details}>
        <div className={c.card}>
          <div className={c.options}>
            <PlayerDetailsOptions {...props} />
          </div>
          <div className={c.content}>
            <PlayerDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <PlayerForm />
      </Modal>

    return (
      <div className={c.module}>
        <div className={c.container}>
          <List />
          <Route
            path={`${path}/:player_id(\\d+)`}
            component={Details} />
        </div>
        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:player_id(\\d+)/edit`] }
          component={Form} />
      </div>
    );
  }
}

export default PlayerPanel;
