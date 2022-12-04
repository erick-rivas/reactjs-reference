/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";
import { Modal } from "seed/helpers";
import { Route } from "seed/helpers";

class ModalRoute extends React.Component {

  render() {
    const { path = "" } = this.props;
    const ModalWrapper = (props) =>
        <Modal 
          {...props} 
          {...this.props} 
          {...(props.match.params != null ? props.match.params : {})} 
          url={props.match.url} />;

    return (
      <Route
        path={path}
        render={ModalWrapper} />
    );
  }
}

ModalRoute.propTypes = {
  path: PropTypes.string.isRequired
};

export default ModalRoute;