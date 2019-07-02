/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - name
    - photo
    - is_active
    - team
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import _PlayerItem from '_seed/components/players/Item';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/players/Item.module.css';

class PlayerItem extends _PlayerItem
{
  render()
  {
    const { player } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{player.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(player)}</div>
        <Svg className={styles.options}
          src={require('assets/icons/ic_expand.svg')}
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

export default PlayerItem;
