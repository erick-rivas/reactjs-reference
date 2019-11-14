import React from "react";
import { Route } from "react-router-dom";

import PlayerDetails from "examples/players/Details";
import PlayerList from "examples/players/List";
import PlayerListOptions from "examples/players/options/List";
import PlayerDetailsOptions from "examples/players/options/Details";
import PlayerForm from "examples/players/Form";
import Modal from "seed/components/helpers/Modal";

import cx from "classnames";
import styles from "resources/css/examples/players/Panel.module.css";

function PlayerPanel(props)
{
  const { path, url } = props.match;

  const List = props =>
    <div className={styles.list}>
      <div className={styles.options}>
        <PlayerListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <PlayerList {...props} />
      </div>
    </div>;

  const Details = props =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <PlayerDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <PlayerDetails {...props} />
        </div>
      </div>
    </div>;

  const Form = props =>
    <Modal {...props}>
      <PlayerForm {...props} />
    </Modal>;

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:player_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:player_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default PlayerPanel;
