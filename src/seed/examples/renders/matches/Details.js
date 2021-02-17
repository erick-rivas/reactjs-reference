import React from "react";
import cx from "classnames";
import css from "resources/css/seed/examples/matches/Details.module.css";

const MatchDetails = (props) =>
  <div class={css.module}>
    <label class={css.lbl}>Date</label><br/>
    <label class={css.txt}>{props.match.date.toString()}</label>
    <br/>
    <label class={css.lbl}>Type</label><br/>
    <label class={css.txt}>{props.match.type.toString()}</label>
    <br/>
  </div>;

export default MatchDetails;