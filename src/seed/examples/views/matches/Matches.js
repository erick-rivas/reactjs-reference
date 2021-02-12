import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import MatchDetails from "seed/examples/components/matches/Details";
import MatchList from "seed/examples/components/matches/List";
import MatchListOptions from "seed/examples/components/matches/options/ListOptions";
import MatchDetailsOptions from "seed/examples/components/matches/options/DetailsOptions";
import MatchForm from "seed/examples/components/matches/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/matches/Matches.module.css";

const Matches = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:match_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:match_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <MatchListOptions {...props}/>
    </div>
    <div class={css.content}>
      <MatchList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <MatchDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <MatchDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <MatchForm {...props} />
  </Modal>;

export default Matches;