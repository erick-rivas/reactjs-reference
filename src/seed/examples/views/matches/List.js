import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/matches/List.module.css";

const MatchList = ({ matches }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        matches.map(match =>
          <NavLink
            key={match.id}
            to={`/${match.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{match.id}</div>
              <div class={css.subtitle}>{JSON.stringify(match)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default MatchList;