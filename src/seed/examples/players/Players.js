import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import PlayerDetails from "seed/examples/players/Details";
import PlayerList from "seed/examples/players/List";
import PlayerListOptions from "seed/examples/players/options/ListOptions";
import PlayerDetailsOptions from "seed/examples/players/options/DetailsOptions";
import PlayerForm from "seed/examples/players/Form";
import Modal from "seed/components/helpers/Modal";
import styles from "resources/css/seed/examples/players/Players.module.css";

function Players(props) {

  const { path, url } = props.match;

  const List = (props) =>
    <div className={styles.list}>
      <div className={styles.options}>
        <PlayerListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <PlayerList {...props} />
      </div>
    </div>;

  const Details = (props) =>
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

  const Form = (props) =>
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

export default Players;
