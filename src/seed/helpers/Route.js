import React from "react";
import { usePageTracking } from "seed/ga";
import { Route as ReactRouterRoute } from "react-router-dom";

const Route = (props) => {
    usePageTracking();
    return <ReactRouterRoute {...props} />;
};
  
export default Route;