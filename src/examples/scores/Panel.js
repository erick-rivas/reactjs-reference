import React from "react";
import { Route } from "react-router-dom";

import ScoreDetails from "examples/scores/Details";
import ScoreList from "examples/scores/List";
import ScoreListOptions from "examples/scores/options/List";
import ScoreDetailsOptions from "examples/scores/options/Details";
import ScoreForm from "examples/scores/Form";
import Modal from "seed/components/helpers/Modal";

import cx from "classnames";
import styles from "resources/css/examples/scores/Panel.module.css";

function ScorePanel(props)
{
  const { path, url } = props.match;

  const List = (props) =>
    <div className={styles.list}>
      <div className={styles.options}>
        <ScoreListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <ScoreList {...props} />
      </div>
    </div>;

  const Details = (props) =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <ScoreDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <ScoreDetails {...props} />
        </div>
      </div>
    </div>;

  const Form = (props) =>
    <Modal {...props}>
      <ScoreForm {...props} />
    </Modal>;

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
        <Route
          path={`${path}/:score_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={
          [`${path}/:any/new`,`${path}/new`,
          `${path}/:score_id(\\d+)/edit`] }
        component={Form} />
    </div>
  );
}

export default ScorePanel;
