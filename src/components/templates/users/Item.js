/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';
import redux from 'seed/helpers/redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from 'resources/css/templates/users/Item.module.css';

class UserItem extends React.Component
{
  render()
  {
    const { user } = this.props;

    return (
      <div className={styles.module}>
        <div className={styles.title}>{user.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(user)}</div>
        <Svg className={styles.options}
          src={require('resources/icons/ic_expand.svg')}
          onClick={this.onClickOptions} />
        <Menu
          anchorEl={this.state.optionMenu}
          open={Boolean(this.state.optionMenu)}
          onClose={this.onCloseMenu}>
          <MenuItem>Delete</MenuItem>
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
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  onClickOptions(e)
  {
    this.setState({
      optionMenu: e.currentTarget
    });
  }

  onCloseMenu(e)
  {
    this.setState({
      optionMenu: null
    });
  }
}

export default redux(UserItem);
