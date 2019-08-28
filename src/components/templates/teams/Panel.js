/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import TeamDetails from 'components/templates/teams/details/Details';
import TeamList from 'components/templates/teams/List';
import TeamListOptions from 'components/templates/teams/options/List';
import TeamDetailsOptions from 'components/templates/teams/options/Details';
import TeamForm from 'components/templates/teams/Form';

import Modal from 'seed/components/helpers/Modal';

import c from 'resources/css/templates/teams/Panel.module.css';

class TeamPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={c.list}>
        <div className={c.options}>
          <TeamListOptions {...props}/>
        </div>
        <div className={c.content}>
          <TeamList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={c.details}>
        <div className={c.card}>
          <div className={c.options}>
            <TeamDetailsOptions {...props} />
          </div>
          <div className={c.content}>
            <TeamDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <TeamForm />
      </Modal>

    return (
      <div className={c.module}>
        <div className={c.container}>
          <List />
          <Route
            path={`${path}/:team_id(\\d+)`}
            component={Details} />
        </div>
        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:team_id(\\d+)/edit`] }
          component={Form} />
      </div>
    );
  }
}

export default TeamPanel;
