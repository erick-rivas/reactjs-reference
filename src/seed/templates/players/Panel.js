/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import PlayerDetails from 'seed/templates/players/details/Details';
import PlayerList from 'seed/templates/players/List';
import PlayerListOptions from 'seed/templates/players/options/List';
import PlayerDetailsOptions from 'seed/templates/players/options/Details';
import PlayerForm from 'seed/templates/players/Form';

import Modal from 'seed/components/helpers/Modal';

import cls from 'resources/css/seed/templates/players/Panel.module.css';

class PlayerPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={cls.list}>
        <div className={cls.options}>
          <PlayerListOptions {...props}/>
        </div>
        <div className={cls.content}>
          <PlayerList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={cls.details}>
        <div className={cls.card}>
          <div className={cls.options}>
            <PlayerDetailsOptions {...props} />
          </div>
          <div className={cls.content}>
            <PlayerDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <PlayerForm />
      </Modal>

    return (
      <div className={cls.module}>
        <div className={cls.container}>
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
