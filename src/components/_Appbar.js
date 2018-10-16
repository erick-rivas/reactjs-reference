import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info'
import NotificationIcon from '@material-ui/icons/Notifications'

import Search from 'components/_appbar/_Search';
import Profile from 'components/_appbar/_Profile';

import styles from 'styles/css/appbar.module.css';


class Appbar extends React.Component
{
  render() 
  {
    return (
      <div className={styles.module}>

        <IconButton className={styles.option + ' ' + styles.menu}>
          <MenuIcon />
        </IconButton>

        <div className={styles.search}>
          <Search />
        </div>

        <div className={styles.options}>

          <IconButton className={styles.option + ' ' + styles.info}>
            <InfoIcon />
          </IconButton>
          <IconButton className={styles.option + ' ' + styles.notif}>
            <NotificationIcon />
          </IconButton>
          <div className={styles.profile}>
            <Profile />
          </div>

        </div>

      </div>
    );
  }
}

export default Appbar;