import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/teams/List.module.css";

const TeamList = ({ teams }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        teams.map(team =>
          <NavLink
            key={team.id}
            to={`/${team.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{team.id}</div>
              <div class={css.subtitle}>{JSON.stringify(team)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default TeamList;