import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
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

const Players = ({ url }) =>
  <div class={css.module}>
    <div class={css.container}>
      <div class={css.list}>
        <PlayerList url={url} />
      </div>
      <Route
        path={`${url}/:player_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${url}/:any/new`,`${url}/new`, `${url}/:player_id(\\d+)/edit`] }
      component={Form} />
  </div>;

export default Players;