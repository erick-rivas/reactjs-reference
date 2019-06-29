/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - date
    - type
    - local
    - visitor
    - scores
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import _MatchItem from '_seed/components/matches/Item';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/matches/Item.module.css';

class MatchItem extends _MatchItem
{
  render()
  {
    const { match } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{match.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(match)}</div>
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

export default MatchItem;
