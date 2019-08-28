/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from 'resources/css/templates/users/options/List.module.css';

class UserListOptions extends React.Component
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
}

export default redux(UserListOptions);

