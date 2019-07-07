/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import * as DataUtil from 'util/DataUtil.js';

import Component from 'components/stats/scores/Item.link';

import styles from 'resources/css/stats/scores/Item.module.css';

class ScoreItem extends Component
{
  render()
  {
    const { score } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{score.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(score)}</div>
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

export default ScoreItem;
