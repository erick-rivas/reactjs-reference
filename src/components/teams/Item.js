/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - name
    - logo_url
    - description
    - market_value
    - players
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import _TeamItem from '_seed/components/teams/Item';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/teams/Item.module.css';

class TeamItem extends _TeamItem
{
  render()
  {
    const { team } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{team.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(team)}</div>
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

export default TeamItem;
