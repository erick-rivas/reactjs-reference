import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import PlayerDetails from "seed/examples/components/players/Details";
import PlayerList from "seed/examples/components/players/List";
import PlayerListOptions from "seed/examples/components/players/options/ListOptions";
import PlayerDetailsOptions from "seed/examples/components/players/options/DetailsOptions";
import PlayerForm from "seed/examples/components/players/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/players/Players.module.css";

const Players = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:player_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:player_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <PlayerListOptions {...props}/>
    </div>
    <div class={css.content}>
      <PlayerList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <PlayerDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <PlayerDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <PlayerForm {...props} />
  </Modal>;

export default Players;