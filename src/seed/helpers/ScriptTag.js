/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import PropTypes from 'prop-types';

/**
 * Helper component to bing javascript tag code (e.g. <script> ... </script>)
 * @param {string} content Script content
 */

class ScriptTag extends React.Component {
  
  render() {
    return (<div/>);
  }

  shouldComponentUpdate() {
    return false
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
}

export default ScriptTag;