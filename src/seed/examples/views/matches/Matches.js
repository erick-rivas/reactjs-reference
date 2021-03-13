import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import MatchDetails from "seed/examples/components/matches/Details";
import MatchList from "seed/examples/components/matches/List";
import MatchForm from "seed/examples/components/matches/Form";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/matches/Matches.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <MatchDetails {...props} />
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <MatchForm {...props} />
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
        path={
          [`/:any/new`,`$/new`, `/:match_id(\\d+)/edit`] }
        component={Form} />
    </div>
  </Router>;

export default Matches;