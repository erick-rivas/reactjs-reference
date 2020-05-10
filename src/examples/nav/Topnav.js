import React from "react";
import cx from "classnames";
import { ReactSVG } from "react-svg";
import styles from "resources/css/examples/nav/Topnav.module.css";

function Topnav(props)
{
  return (
    <div className={styles.module}>
      <ReactSVG className={styles.menu}
        src={require("resources/icons/ic_menu.svg")} />
    </div>
  );
}

export default Topnav;

