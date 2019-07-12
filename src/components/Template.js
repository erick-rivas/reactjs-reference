/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux'

import styles from 'resources/css/Template.module.css';

class Template extends React.Component
{
  render()
  {
    return (
      <div>
        <h2>Hi!</h2>
        <p>To test project template open /app</p>
      </div>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
};

export default redux(Template);
