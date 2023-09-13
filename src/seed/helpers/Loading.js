/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from 'prop-types';
import css from "styles/css/seed/styles/Loading.module.css";

class Loading extends React.Component {
  render() {
    const { color="#3f51b5"} = this.props;
    return (
      <div className={css.module}>
        <svg stroke={color} viewBox="0 0 24 24" className={css.loading}>
            <g className={css.spinner}>
                <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2"></circle>
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