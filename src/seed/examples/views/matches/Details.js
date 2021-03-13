import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "resources/css/seed/examples/matches/Details.module.css";

const MatchDetails = ({ match, onClickDelete, onClickBack }) =>
  <div class={css.module}>
    <div class={css.header}>
         <i class={cx(css.back, "fas fa-arrow-left")}
          onClick={onClickBack} />
        <div class={css.options}>
          <Link to={`/edit`}
            className={cx(css.btn, css.edit)}>Edit</Link>
          <button class={cx(css.btn, css.delete)}
            onClick={onClickDelete}>Delete</button>
        </div>
    </div>
    <div class={css.content}>
          <label class={css.lbl}>Date</label><br/>
          <label class={css.txt}>{ match.date.toString() }</label>
          <br/>
          <label class={css.lbl}>Type</label><br/>
          <label class={css.txt}>{ match.type.toString() }</label>
          <br/>
    </div>
  </div>;

export default MatchDetails;