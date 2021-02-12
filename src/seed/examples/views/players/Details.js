import React from "react";
import cx from "classnames";
import Loading from "seed/components/helpers/Loading";
import css from "resources/css/seed/examples/players/Details.module.css";

const PlayerDetails = (props) =>
  <div class={css.module}>
    <label class={css.lbl}>Name</label><br/>
    <label class={css.txt}>{props.player.name.toString()}</label>
    <br/>
    <label class={css.lbl}>Photo</label><br/>
    <label class={css.txt}>{props.player.photo.toString()}</label>
    <br/>
    <label class={css.lbl}>Is active</label><br/>
    <label class={css.txt}>{props.player.isActive.toString()}</label>
    <br/>
  </div>;

export default PlayerDetails;