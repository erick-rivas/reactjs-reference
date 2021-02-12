import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "resources/css/seed/examples/matches/options/DetailsOptions.module.css";

const MatchDetailsOptions = (props) =>
  <div class={css.module}>
    <i class={cx(css.back, "fas fa-arrow-left")}
      onClick={props.onClickBack} />
    <div class={css.options}>
      <Link to={`${props.url}/edit`}
        class={cx(css.btn, css.edit)}>Edit</Link>
      <button class={cx(css.btn, css.delete)}
        onClick={props.onClickDelete}>Delete</button>
    </div>
  </div>;

export default MatchDetailsOptions;