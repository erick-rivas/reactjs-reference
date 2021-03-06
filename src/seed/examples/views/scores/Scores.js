import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import ScoreDetails from "seed/examples/components/scores/Details";
import ScoreList from "seed/examples/components/scores/List";
import ScoreListOptions from "seed/examples/components/scores/options/ListOptions";
import ScoreDetailsOptions from "seed/examples/components/scores/options/DetailsOptions";
import ScoreForm from "seed/examples/components/scores/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/scores/Scores.module.css";

const Scores = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:score_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:score_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <ScoreListOptions {...props}/>
    </div>
    <div class={css.content}>
      <ScoreList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <ScoreDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <ScoreDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <ScoreForm {...props} />
  </Modal>;

export default Scores;