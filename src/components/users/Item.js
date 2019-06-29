/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - username
    - first_name
    - last_name
    - email
    - is_active
    - teams
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import _UserItem from '_seed/components/users/Item';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/users/Item.module.css';

class UserItem extends _UserItem
{
  render()
  {
    const { user } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{user.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(user)}</div>
        <Svg className={styles.options}
          src={require('util/assets/icons/ic_expand.svg')}
          onClick={this.onClickOptions} />
        <Menu
          anchorEl={this.state.anchorMenu}
          open={Boolean(this.state.anchorMenu)}
          onClose={this.onCloseMenu}>
          <MenuItem>Delete</MenuItem>
        </Menu>

      </div>
    );
  }
}

export default UserItem;
