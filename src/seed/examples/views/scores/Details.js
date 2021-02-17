import React from "react";
import cx from "classnames";
import css from "resources/css/seed/examples/scores/Details.module.css";

const ScoreDetails = (props) =>
  <div class={css.module}>
    <label class={css.lbl}>Min</label><br/>
    <label class={css.txt}>{props.score.min.toString()}</label>
    <br/>
  </div>;

export default ScoreDetails;