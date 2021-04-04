import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GA_KEY } from "settings/Config";
import ReactGA from "react-ga";

function Analytics({ history }) {
  useEffect(() => {
    ReactGA.initialize(GA_KEY);
    const pathname = history.location.pathname.replace(/\d+/g, ":id");
    ReactGA.pageview(pathname);
  }, [history.location.pathname]);
  return <div />;
}

Analytics.propTypes = {
  history: PropTypes.object.isRequired
};

export default Analytics;