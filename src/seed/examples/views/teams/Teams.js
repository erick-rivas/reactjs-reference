import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import TeamDetails from "seed/examples/components/teams/Details";
import TeamList from "seed/examples/components/teams/List";
import TeamListOptions from "seed/examples/components/teams/options/ListOptions";
import TeamDetailsOptions from "seed/examples/components/teams/options/DetailsOptions";
import TeamForm from "seed/examples/components/teams/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/teams/Teams.module.css";

const Teams = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:team_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:team_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <TeamListOptions {...props}/>
    </div>
    <div class={css.content}>
      <TeamList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <TeamDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <TeamDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <TeamForm {...props} />
  </Modal>;

export default Teams;