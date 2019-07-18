/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux'
import { Link } from 'react-router-dom';

import styles from 'resources/css/templates/players/options/List.module.css';

class PlayerListOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;

    return (
    <div className={styles.module}>
      <div className={styles.options}>
        <Link to={`${url}/new`} className={cx(styles.btn, styles.create)}>Create</Link>
      </div>
    </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(PlayerListOptions);

