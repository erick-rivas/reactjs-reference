import React from "react";
import cx from "classnames";
import Loading from "seed/components/helpers/Loading";
import css from "resources/css/seed/examples/teams/Details.module.css";

const TeamDetails = (props) =>
  <div class={css.module}>
    <label class={css.lbl}>Name</label><br/>
    <label class={css.txt}>{props.team.name.toString()}</label>
    <br/>
    <label class={css.lbl}>Logo</label><br/>
    <label class={css.txt}>{props.team.logo.toString()}</label>
    <br/>
    <label class={css.lbl}>Description</label><br/>
    <label class={css.txt}>{props.team.description.toString()}</label>
    <br/>
    <label class={css.lbl}>Market value</label><br/>
    <label class={css.txt}>{props.team.marketValue.toString()}</label>
    <br/>
    <label class={css.lbl}>Identity docs</label><br/>
    <label class={css.txt}>{props.team.identityDocs.toString()}</label>
    <br/>
  </div>;

export default TeamDetails;