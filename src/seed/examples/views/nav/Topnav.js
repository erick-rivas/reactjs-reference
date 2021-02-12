import React from "react";
import cx from "classnames";
import { ReactSVG } from "react-svg";
import css from "resources/css/seed/examples/nav/Topnav.module.css";

const Topnav = (props) =>
  <div class={css.module}>
    <ReactSVG class={css.menu}
      src={require("resources/icons/ic_menu.svg")} />
  </div>;

export default Topnav;