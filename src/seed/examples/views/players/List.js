import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/players/List.module.css";

const PlayerList = ({ players }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        players.map(player =>
          <NavLink
            key={player.id}
            to={`/${player.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{player.id}</div>
              <div class={css.subtitle}>{JSON.stringify(player)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default PlayerList;