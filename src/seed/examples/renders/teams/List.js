import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/teams/List.module.css";

const TeamList = (props) =>
  <div class={css.module}>
    { 
      props.teams.map(item =>
        <NavLink
          key={item.id}
          to={`${props.url}/${item.id}`}
          class={css.item}
          activeClassName={css.active}>
            <div class={css.title}>{item.id}</div>
            <div class={css.subtitle}>{JSON.stringify(item)}</div>
        </NavLink>
      )
    }
  </div>

export default TeamList;