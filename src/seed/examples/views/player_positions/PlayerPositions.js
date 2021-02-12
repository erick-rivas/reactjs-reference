import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import PlayerPositionDetails from "seed/examples/components/player_positions/Details";
import PlayerPositionList from "seed/examples/components/player_positions/List";
import PlayerPositionListOptions from "seed/examples/components/player_positions/options/ListOptions";
import PlayerPositionDetailsOptions from "seed/examples/components/player_positions/options/DetailsOptions";
import PlayerPositionForm from "seed/examples/components/player_positions/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/player_positions/PlayerPositions.module.css";

const PlayerPositions = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:player_position_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:player_position_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <PlayerPositionListOptions {...props}/>
    </div>
    <div class={css.content}>
      <PlayerPositionList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <PlayerPositionDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <PlayerPositionDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <PlayerPositionForm {...props} />
  </Modal>;

export default PlayerPositions;