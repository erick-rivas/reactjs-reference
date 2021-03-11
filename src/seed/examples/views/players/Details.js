import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "resources/css/seed/examples/players/Details.module.css";

const PlayerDetails = ({ url, player, onClickDelete, onClickBack }) =>
  <div class={css.module}>
    <div class={css.header}>
         <i class={cx(css.back, "fas fa-arrow-left")}
          onClick={onClickBack} />
        <div class={css.options}>
          <Link to={`${url}/edit`}
            className={cx(css.btn, css.edit)}>Edit</Link>
          <button class={cx(css.btn, css.delete)}
            onClick={onClickDelete}>Delete</button>
        </div>
    </div>
    <div class={css.content}>
          <label class={css.lbl}>Name</label><br/>
          <label class={css.txt}>{ player.name.toString() }</label>
          <br/>
          <label class={css.lbl}>Photo</label><br/>
          <label class={css.txt}>{ player.photo.toString() }</label>
          <br/>
          <label class={css.lbl}>Is active</label><br/>
          <label class={css.txt}>{ player.isActive.toString() }</label>
          <br/>
    </div>
  </div>;

export default PlayerDetails;