import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import AssessmentIcon from '@material-ui/icons/Assessment';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ListIcon from '@material-ui/icons/List';
import ListAddIcon from '@material-ui/icons/PlaylistAdd';
import InputIcon from '@material-ui/icons/SettingsInputComponent';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import styles from 'styles/css/drawer-nav.module.css';


class Nav extends React.Component
{
  state = {
    collapseOpen: false,
    forceCollapse: false,
    petOpen: false,
  };

  componentDidMount()
  {
    const { fetchPets } = this.props;
    fetchPets();
  }

  componentDidUpdate()
  {
    const { didSave, ackSave } = this.props;
    if (didSave) ackSave();
    if (didSave)
      this.setState({
        petOpen: false
      });
  }

  handleCollapse = e =>
  {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
      forceCollapse: true
    });
  };

  handleAdd = e =>
  {
    this.setState({
      petOpen: !this.state.petOpen
    });
  }

  handleSave = e =>
  {
    const { savePet } = this.props;
    e.preventDefault();
    savePet(e.target.name.value);
  }

  render() 
  {
    const { pets = [] } = this.props;

    const petList = pets.map((p) =>
    {
      return (
        <NavLink
          to={`/toys/${p.name}`}
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText inset primary={p.name} />
          </ListItem>
        </NavLink>
      )
    });

    const petAdd =
      this.state.petOpen ?
        <a>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <form onSubmit={this.handleSave}>
              <input
                className={styles.petText}
                placeholder='Pet name'
                name='name'
                autocomplete='off'
                autoFocus
                required />
            </form>
          </ListItem>
        </a> : null;

    return (
      <div className={styles.module}>

        <NavLink
          to='/toys/all'
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <CheckBoxIcon />
            </ListItemIcon>
            <ListItemText primary='Toys' />
            {this.state.toyOpen ?
              <ExpandLess onClick={this.handleCollapse} /> :
              <ExpandMore onClick={this.handleCollapse} />}
          </ListItem>
        </NavLink>

        <Collapse
          className={styles.collapse}
          in={this.state.collapseOpen ||
            (!this.state.forceCollapse && pets.length > 0)}
          timeout='auto'
          unmountOnExit>
          {petList}
          {petAdd}
          <a>
            <ListItem
              onClick={this.handleAdd}
              button>
              <ListItemIcon>
                <ListAddIcon />
              </ListItemIcon>
              <ListItemText inset primary='Add pet' />
            </ListItem>
          </a>
        </Collapse>

        <NavLink
          to='/stores'
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary='Stores' />
          </ListItem>
        </NavLink>

        <NavLink
          to='/dashboards/last'
          activeClassName={styles.active}>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboards' />
          </ListItem>
        </NavLink>

      </div>
    );
  }
}

Nav.propTypes = {
  toys: PropTypes.array.isRequired,
  fetchToys: PropTypes.func.isRequired
}

export default Nav;