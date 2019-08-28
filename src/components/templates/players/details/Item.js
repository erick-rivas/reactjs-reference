/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from 'resources/css/templates/players/details/Item.module.css';

class PlayerItem extends React.Component
{
  render()
  {
    const player = this.props.player;
    return (
      <div className={styles.module}>
        <div className={styles.title}>{player.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(player)}</div>
        <Svg className={styles.options}
          src={require('resources/icons/ic_expand.svg')}
          onClick={this.onClickOptions} />
        <Menu
          anchorEl={this.state.optionMenu}
          open={Boolean(this.state.optionMenu)}
          onClose={this.onCloseMenu}>
          <MenuItem onClick={this.onClickDelete}>Delete</MenuItem>
        </Menu>

      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      optionMenu: null
    }
    this.onClickOptions = this.onClickOptions.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  /* Events */

  onClickOptions(e)
  {
    e.preventDefault();
    this.setState({
      optionMenu: e.currentTarget
    });
  }

  onClickDelete(e)
  {
    e.preventDefault();
    this.props.deletePlayer(this.props.player.id);
  }

  onCloseMenu(e)
  {
    e.preventDefault();
    this.setState({
      optionMenu: null
    });
  }
}

export default redux(PlayerItem);
