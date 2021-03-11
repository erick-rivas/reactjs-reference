import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "resources/css/seed/examples/scores/Details.module.css";

const ScoreDetails = ({ url, score, onClickDelete, onClickBack }) =>
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
          <label class={css.lbl}>Min</label><br/>
          <label class={css.txt}>{ score.min.toString() }</label>
          <br/>
    </div>
  </div>;

export default ScoreDetails;