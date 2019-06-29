/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - min
    - player
    - match
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import _ScoreItem from '_seed/components/scores/Item';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/scores/Item.module.css';

class ScoreItem extends _ScoreItem
{
  render()
  {
    const { score } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{score.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(score)}</div>
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

export default ScoreItem;
