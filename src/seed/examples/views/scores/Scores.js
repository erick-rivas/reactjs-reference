import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import ScoreDetails from "seed/examples/components/scores/Details";
import ScoreList from "seed/examples/components/scores/List";
import ScoreFormSave from "seed/examples/components/scores/FormSave";
import ScoreFormSet from "seed/examples/components/scores/FormSet";
import Modal from "seed/helpers/Modal";
import css from "resources/css/seed/examples/scores/Scores.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <ScoreDetails {...props} />
    </div>
  </div>;

const FormSave = (props) =>
  <Modal {...props}>
    <ScoreFormSave {...props} />
  </Modal>;

const FormSet = (props) =>
  <Modal {...props}>
    <ScoreFormSet {...props} />
  </Modal>;

const Scores = (props) =>
  <Router basename="/scores">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <ScoreList />
        </div>
        <Route
          path={`/:score_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={[`/:any/new`,`/new`,]}
        component={FormSave} />
      <Route
        path={`/:score_id(\\d+)/edit`}
        component={FormSet} />
    </div>
  </Router>;

export default Scores;