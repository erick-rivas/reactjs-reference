import React, { useEffect } from "react";
import { GA_KEY } from "settings/Config";
import ReactGA from "react-ga";
import Render from "seed/examples/renders/nav/Analytics";

function Analytics(props) {
  useEffect(() => {
    ReactGA.initialize(GA_KEY);
    const pathname = props.history.location.pathname.replace(/\d+/g, ":id");
    ReactGA.pageview(pathname);
  });
  return <Render />;
}

export default Analytics;