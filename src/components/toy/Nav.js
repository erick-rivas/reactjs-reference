import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import styles from 'styles/css/toy-nav.module.css';


class Nav extends React.Component
{
  render() 
  {
    const { params, url } = this.props.match;
    const pet = params.pet;
    
    return (
      <div className={styles.module}>

        <div className={styles.container}>
          <NavLink
            to={`/toys/${pet}/list`}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Toys' />
            </ListItem>
          </NavLink>

          <NavLink
            to={`/toys/${pet}/calendar`}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Calendar' />
            </ListItem>
          </NavLink>

          <NavLink
            to={`/toys/${pet}/attachments`}
            activeClassName={styles.active}>
            <ListItem className={styles.item} button>
              <ListItemText primary='Attachments' />
            </ListItem>
          </NavLink>
        </div>

        <div className={styles.options}>
          <Link to={`${url}/add`}>
            <Button className={styles.addToy}>Add toy</Button>
          </Link>
        </div>


      </div>
    );
  }
}

export default Nav;