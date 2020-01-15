import React, { useEffect } from "react";
import { GA_KEY } from "settings/Config";
import ReactGA from "react-ga";
import styles from "resources/css/examples/nav/Analytics.module.css";

function Analytics(props)
{
  useEffect(() =>
  {
    ReactGA.initialize(GA_KEY);
    const pathname = props.history.location.pathname.replace(/\d+/g, ":id");
    ReactGA.pageview(pathname);
  });
  return <div className={styles.module}></div>;
}

export default Analytics;
