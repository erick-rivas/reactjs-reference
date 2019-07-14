/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'

import styles from 'resources/css/debug/Exports.module.css';

class Exports extends React.Component
{
  render()
  {
    const {path, url} = this.props.match;

    return (
        <div className={styles.module}>
          <div className={styles.container}>
            <Switch>
            </Switch>
          </div>
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
}

export default Exports;
