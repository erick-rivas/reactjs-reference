import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import TeamDetails from "seed/examples/components/teams/Details";
import TeamList from "seed/examples/components/teams/List";
import TeamForm from "seed/examples/components/teams/Form";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/teams/Teams.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <TeamDetails {...props} />
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <TeamForm {...props} />
  </Modal>;

const Teams = ({ url }) =>
  <div class={css.module}>
    <div class={css.container}>
      <div class={css.list}>
        <TeamList url={url} />
      </div>
      <Route
        path={`${url}/:team_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${url}/:any/new`,`${url}/new`, `${url}/:team_id(\\d+)/edit`] }
      component={Form} />
  </div>;

export default Teams;