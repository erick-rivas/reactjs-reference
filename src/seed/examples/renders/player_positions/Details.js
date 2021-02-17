import React from "react";
import cx from "classnames";
import css from "resources/css/seed/examples/player_positions/Details.module.css";

const PlayerPositionDetails = (props) =>
  <div class={css.module}>
    <label class={css.lbl}>Name</label><br/>
    <label class={css.txt}>{props.playerPosition.name.toString()}</label>
    <br/>
  </div>;

export default PlayerPositionDetails;