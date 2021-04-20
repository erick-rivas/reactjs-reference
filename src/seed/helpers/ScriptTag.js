/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";

class ScriptTag extends React.Component {
  
  render() {
    return (<div/>);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount () {
    const { content = "" } = this.props;
    const script = document.createElement("script");
    script.innerHTML = content;
    document.body.appendChild(script);
  }
}

ScriptTag.propTypes = {
  content: PropTypes.string.isRequired
};

export default ScriptTag;