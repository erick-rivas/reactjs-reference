import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from 'util/css/helpers/Item.module.css';

class Item extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.subtitle}>{this.props.subtitle}</div>
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

  constructor(props)
  {
    super(props);
    this.state = {
      anchorMenu: null
    }
    this.onClickOptions = this.onClickOptions.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  onClickOptions = e =>
  {
    this.setState({
      anchorMenu: e.currentTarget
    });
  };

  onCloseMenu = e =>
  {
    this.setState({
      anchorMenu: null
    });
  };
}

export default Item;