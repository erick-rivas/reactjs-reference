import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import css from "resources/css/seed/examples/teams/Details.module.css";

const TeamDetails = ({ team, onClickDelete, onClickBack }) =>
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
          <label class={css.lbl}>Name</label><br/>
          <label class={css.txt}>{ team.name.toString() }</label>
          <br/>
          <label class={css.lbl}>Logo</label><br/>
          <label class={css.txt}>{ team.logo.toString() }</label>
          <br/>
          <label class={css.lbl}>Description</label><br/>
          <label class={css.txt}>{ team.description.toString() }</label>
          <br/>
          <label class={css.lbl}>Market value</label><br/>
          <label class={css.txt}>{ team.marketValue.toString() }</label>
          <br/>
          <label class={css.lbl}>Identity docs</label><br/>
          <label class={css.txt}>{ team.identityDocs.toString() }</label>
          <br/>
    </div>
  </div>;

export default TeamDetails;