/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import PropTypes from "prop-types";
import Modal from "seed/helpers/Modal";
import { Route } from "react-router-dom";

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