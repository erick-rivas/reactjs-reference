/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import PlayerTypeDetails from 'seed/templates/player_types/details/Details';
import PlayerTypeList from 'seed/templates/player_types/List';
import PlayerTypeListOptions from 'seed/templates/player_types/options/List';
import PlayerTypeDetailsOptions from 'seed/templates/player_types/options/Details';
import PlayerTypeForm from 'seed/templates/player_types/Form';

import Modal from 'seed/components/helpers/Modal';

import cls from 'resources/css/seed/templates/player_types/Panel.module.css';

class PlayerTypePanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={cls.list}>
        <div className={cls.options}>
          <PlayerTypeListOptions {...props}/>
        </div>
        <div className={cls.content}>
          <PlayerTypeList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={cls.details}>
        <div className={cls.card}>
          <div className={cls.options}>
            <PlayerTypeDetailsOptions {...props} />
          </div>
          <div className={cls.content}>
            <PlayerTypeDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <PlayerTypeForm />
      </Modal>

    return (
      <div className={cls.module}>
        <div className={cls.container}>
          <List />
          <Route
            path={`${path}/:player_type_id(\\d+)`}
            component={Details} />
        </div>
        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:player_type_id(\\d+)/edit`] }
          component={Form} />
      </div>
    );
  }
}

export default PlayerTypePanel;
