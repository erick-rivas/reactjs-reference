import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ProfileImg from 'components/util/ProfileImg'

import styles from 'styles/css/appbar-profile.module.css';


class Profile extends React.Component
{
  state = {
    anchorMenu: null
  };

  openMenu = event =>
  {
    this.setState({ anchorMenu: event.currentTarget });
  };

  closeMenu = event =>
  {
    this.setState({ anchorMenu: null });
  };


  render() 
  {
    const { user } = this.props;
    const { anchorMenu } = this.state;

    return (

      <div className={styles.module}>

        <Button
          className={styles.button}
          aria-owns={anchorMenu ? 'simple-menu' : null}
          aria-haspopup='true'
          onClick={this.openMenu}>

          <div className={styles.image}>
            <ProfileImg user={user} />
          </div>

        </Button>

        <Menu
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={this.closeMenu}>

          <Link to='/logout' onClick={this.closeMenu}>
            <MenuItem>Logout</MenuItem>
          </Link>

        </Menu>

      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired
}


export default Profile;