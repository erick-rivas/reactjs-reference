import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/scores/List.module.css";

const ScoreList = ({ scores }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        scores.map(score =>
          <NavLink
            key={score.id}
            to={`/${score.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{score.id}</div>
              <div class={css.subtitle}>{JSON.stringify(score)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default ScoreList;