import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import TeamDetails from "seed/examples/components/teams/Details";
import TeamList from "seed/examples/components/teams/List";
import TeamFormSave from "seed/examples/components/teams/FormSave";
import TeamFormSet from "seed/examples/components/teams/FormSet";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/teams/Teams.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <TeamDetails {...props} />
    </div>
  </div>;

const FormSave = (props) =>
  <Modal {...props}>
    <TeamFormSave {...props} />
  </Modal>;

const FormSet = (props) =>
  <Modal {...props}>
    <TeamFormSet {...props} />
  </Modal>;

const Teams = (props) =>
  <Router basename="/teams">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <TeamList />
        </div>
        <Route
          path={`/:team_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={[`/:any/new`,`/new`,]}
        component={FormSave} />
      <Route
        path={`/:team_id(\\d+)/edit`}
        component={FormSet} />
    </div>
  </Router>;

export default Teams;