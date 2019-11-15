import React from "react";
import { Route } from "react-router-dom";

import PlayerPositionDetails from "examples/player_positions/Details";
import PlayerPositionList from "examples/player_positions/List";
import PlayerPositionListOptions from "examples/player_positions/options/List";
import PlayerPositionDetailsOptions from "examples/player_positions/options/Details";
import PlayerPositionForm from "examples/player_positions/Form";
import Modal from "seed/components/helpers/Modal";

import cx from "classnames";
import styles from "resources/css/examples/player_positions/Panel.module.css";

function PlayerPositionPanel(props)
{
  const { path, url } = props.match;

  const List = (props) =>
    <div className={styles.list}>
      <div className={styles.options}>
        <PlayerPositionListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <PlayerPositionList {...props} />
      </div>
    </div>;

  const Details = (props) =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <PlayerPositionDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <PlayerPositionDetails {...props} />
        </div>
      </div>
    </div>;

  const Form = (props) =>
    <Modal {...props}>
      <PlayerPositionForm {...props} />
    </Modal>;

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:player_position_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:player_position_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default PlayerPositionPanel;
