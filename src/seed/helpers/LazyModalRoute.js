/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";
import { Modal } from "seed/helpers";
import { LazyRoute } from "seed/helpers";

class LazyModalRoute extends React.Component {

  render() {
    const { path = "" } = this.props;
    const ModalWrapper = (props) =>
      <Modal
        {...props}
        {...this.props}
        {...(props.match.params != null ? props.match.params : {})}
        url={props.match.url} />;

    return (
      <LazyRoute
        path={path}
        component={ModalWrapper} />
    );
  }
}

LazyModalRoute.propTypes = {
  path: PropTypes.string.isRequired
};

export default LazyModalRoute;