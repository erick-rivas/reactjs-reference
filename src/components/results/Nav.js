import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import * as styles from 'util/css/results/Nav.module.css';


class Nav extends React.Component
{
  render() 
  {
    const { params, url } = this.props.match;
    return (
      <div className={styles.module}>

        <div className={styles.container}>
          <NavLink
            to={`/results/players`}
            className={styles.navItem}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Players' />
            </ListItem>
          </NavLink>

          <NavLink
            to={`/results/matches`}
            className={styles.navItem}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Matches' />
            </ListItem>
          </NavLink>

          <NavLink
            to={`/results/calendar`}
            className={styles.navItem}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Calendar' />
            </ListItem>
          </NavLink>
        </div>

        <div className={styles.options}>
          <Link to={`${url}/add`}>
            <Button className={styles.addMatch}>Add match</Button>
          </Link>
        </div>


      </div>
    );
  }
}

export default Nav;