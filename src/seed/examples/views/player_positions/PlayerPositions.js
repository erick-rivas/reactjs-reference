import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import PlayerPositionDetails from "seed/examples/components/player_positions/Details";
import PlayerPositionList from "seed/examples/components/player_positions/List";
import PlayerPositionForm from "seed/examples/components/player_positions/Form";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/player_positions/PlayerPositions.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <PlayerPositionDetails {...props} />
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <PlayerPositionForm {...props} />
  </Modal>;

const PlayerPositions = (props) =>
  <Router basename="/player_positions">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <PlayerPositionList />
        </div>
        <Route
          path={`/:player_position_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`/:any/new`,`$/new`, `/:player_position_id(\\d+)/edit`] }
        component={Form} />
    </div>
  </Router>;

export default PlayerPositions;