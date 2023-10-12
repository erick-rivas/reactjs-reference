/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";

class StyleTag extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: Math.floor(Math.random() * 10000000) };
  }

  render() {
    return (<div id={"style-" + this.state.id} />);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { content = "" } = this.props;
    const style = document.createElement("style");
    style.innerHTML = content;
    document.getElementById("style-" + this.state.id).appendChild(style);
  }
}

StyleTag.propTypes = {
  content: PropTypes.string.isRequired
};

export default StyleTag;