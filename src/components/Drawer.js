import * as React from 'react'
import { NavLink } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AssessmentIcon from '@material-ui/icons/Assessment';
import HeadlinesIcon from '@material-ui/icons/ViewHeadline';
import PepleIcon from '@material-ui/icons/People';
import NotificationIcon from '@material-ui/icons/Notifications';

import * as styles from 'styles/css/drawer.module.css';


class Home extends React.Component
{
  render()
  {
    return (
      <nav className={styles.module}>

        <div className={styles.header}>
          <div className={styles.headerTitle}>
            LaLiga<span> mx</span>
          </div>
        </div>

        <NavLink
          to='/results'
          className={styles.navItem}
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <HeadlinesIcon />
            </ListItemIcon>
            <ListItemText primary='Results' />
          </ListItem>
        </NavLink>

        <NavLink
          to='/teams'
          className={styles.navItem}
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <PepleIcon />
            </ListItemIcon>
            <ListItemText primary='Teams' />
          </ListItem>
        </NavLink>

        <NavLink
          to='/standings'
          className={styles.navItem}
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary='Standings' />
          </ListItem>
        </NavLink>

        <NavLink
          to='/news'
          className={styles.navItem}
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <NotificationIcon />
            </ListItemIcon>
            <ListItemText primary='News' />
          </ListItem>
        </NavLink>

      </nav >
    );
  }
}

export default Home;
