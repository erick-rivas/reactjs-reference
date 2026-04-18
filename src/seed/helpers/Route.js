/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import { Route as ReactRouterRoute } from "react-router-dom";

const Route = (props) => {
  return <ReactRouterRoute {...props} />;
};
  
export default Route;