import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import MatchDetails from "seed/examples/matches/Details";
import MatchList from "seed/examples/matches/List";
import MatchListOptions from "seed/examples/matches/options/ListOptions";
import MatchDetailsOptions from "seed/examples/matches/options/DetailsOptions";
import MatchForm from "seed/examples/matches/Form";
import Modal from "seed/components/helpers/Modal";
import styles from "resources/css/seed/examples/matches/Matches.module.css";

function Matches(props) {

  const { path, url } = props.match;

  const List = (props) =>
    <div className={styles.list}>
      <div className={styles.options}>
        <MatchListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <MatchList {...props} />
      </div>
    </div>;

  const Details = (props) =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <MatchDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <MatchDetails {...props} />
        </div>
      </div>
    </div>;

  const Form = (props) =>
    <Modal {...props}>
      <MatchForm {...props} />
    </Modal>;

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:match_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:match_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default Matches;