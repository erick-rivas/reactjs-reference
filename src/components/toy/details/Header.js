import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreHoriz';

import styles from 'styles/css/toy-details-header.module.css';


class Header extends React.Component
{
  state = {
    anchorMenu: null
  };

  openMenu = event =>
  {
    this.setState({ anchorMenu: event.currentTarget });
  };

  closeMenu = () =>
  {
    this.setState({ anchorMenu: null });
  };

  handleDelete = () =>
  {
    const { toy, deleteToy } = this.props;
    deleteToy(toy.id);
    this.closeMenu();
  };


  render() 
  {
    const { anchorMenu } = this.state;

    return (
      <div className={styles.module}>
        <IconButton
          className={styles.options}
          onClick={this.openMenu}>
          <MoreIcon />
        </IconButton>

        <Menu
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={this.closeMenu}>
          <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
        </Menu>

      </div>
    );
  }
}

export default Header;