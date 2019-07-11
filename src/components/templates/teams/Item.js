/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Component from 'components/templates/teams/Item.link';

import styles from 'resources/css/templates/teams/Item.module.css';

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
