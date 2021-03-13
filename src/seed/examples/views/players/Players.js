import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import PlayerDetails from "seed/examples/components/players/Details";
import PlayerList from "seed/examples/components/players/List";
import PlayerForm from "seed/examples/components/players/Form";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/players/Players.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <PlayerDetails {...props} />
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <PlayerForm {...props} />
  </Modal>;

const Players = (props) =>
  <Router basename="/players">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <PlayerList />
        </div>
        <Route
          path={`/:player_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`/:any/new`,`$/new`, `/:player_id(\\d+)/edit`] }
        component={Form} />
    </div>
  </Router>;

export default Players;