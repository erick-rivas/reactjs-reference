import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/player_positions/List.module.css";

const PlayerPositionList = ({ url, playerPositions }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`${url}/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        playerPositions.map(playerPosition =>
          <NavLink
            key={playerPosition.id}
            to={`${url}/${playerPosition.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{playerPosition.id}</div>
              <div class={css.subtitle}>{JSON.stringify(playerPosition)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default PlayerPositionList;