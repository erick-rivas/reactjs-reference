/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import * as DataUtil from 'util/DataUtil.js';

import Component from 'components/teams/Item.link.js';

import styles from 'resources/css/teams/Item.module.css';

class TeamItem extends Component
{
  render()
  {
    const { team } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{team.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(team)}</div>
        <Svg className={styles.options}
          src={require('resources/icons/ic_expand.svg')}
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
