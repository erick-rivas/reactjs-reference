/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from 'prop-types';
import cx from "classnames";
import css from "styles/css/seed/styles/Loading.module.css";

class Loading extends React.Component {
  render() {
    const { color = "#3f51b5", size = 50 } = this.props;
    return (
      <div className={cx(css.module, "seed__loading")}>
        <svg stroke={color} viewBox="0 0 24 24" className={css.loading}
          style={ { width: size + "px", height: size + "px", marginLeft: (-size / 2) + "px", marginTop: (-size / 2) + "px" } }>
          <g className={css.spinner}>
            <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="2"></circle>
          </g>
        </svg>
      </div>
    );
  }
}

Loading.propTypes = {
  color: PropTypes.string
};

export default Loading;