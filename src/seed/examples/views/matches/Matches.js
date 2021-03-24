import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import MatchDetails from "seed/examples/components/matches/Details";
import MatchList from "seed/examples/components/matches/List";
import MatchFormSave from "seed/examples/components/matches/FormSave";
import MatchFormSet from "seed/examples/components/matches/FormSet";
import Modal from "seed/helpers/Modal";
import css from "resources/css/seed/examples/matches/Matches.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <MatchDetails {...props} />
    </div>
  </div>;

const FormSave = (props) =>
  <Modal {...props}>
    <MatchFormSave {...props} />
  </Modal>;

const FormSet = (props) =>
  <Modal {...props}>
    <MatchFormSet {...props} />
  </Modal>;

const Matches = (props) =>
  <Router basename="/matches">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <MatchList />
        </div>
        <Route
          path={`/:match_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={[`/:any/new`,`/new`,]}
        component={FormSave} />
      <Route
        path={`/:match_id(\\d+)/edit`}
        component={FormSet} />
    </div>
  </Router>;

export default Matches;