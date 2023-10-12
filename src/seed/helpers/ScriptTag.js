/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";

class ScriptTag extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: Math.floor(Math.random() * 10000000) };
  }

  render() {
    return (<div id={"script-" + this.state.id} />);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { content = "" } = this.props;
    const script = document.createElement("script");
    script.innerHTML = content;
    document.getElementById("script-" + this.state.id).appendChild(script);
  }
}

ScriptTag.propTypes = {
  content: PropTypes.string.isRequired
};

export default ScriptTag;