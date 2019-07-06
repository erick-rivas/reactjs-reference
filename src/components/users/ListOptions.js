/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';

import Component from 'components/users/ListOptions.link.js';

import styles from 'resources/css/users/ListOptions.module.css';

class UserListOptions extends Component
{
  render()
  {
    const { url } = this.props.match;
    const { is_creating } = this.state;
    const createModal = is_creating ? this.renderModal() : null;

    return (
    <div className={styles.module}>
      <div className={styles.options}>
        <button className={cx(styles.btn, styles.create)} type="button" onClick={this.onCreateClick}>Create</button>
      </div>
      { createModal }
    </div>
    );
  }
}

export default UserListOptions;
