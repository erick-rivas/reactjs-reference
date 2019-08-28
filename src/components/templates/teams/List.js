/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';
import Item from 'components/templates/teams/details/Item';

import styles from 'resources/css/templates/teams/List.module.css';

class TeamList extends React.Component
{
  render()
  {
    const teams = Util.filter(this.props.teams, {});
    if (teams == null) return <Loading />;

    const { url } = this.props.match;

    const teamList = teams.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}>
          <Item 
            key={item.id} 
            id={item.id}
            team={item}/>
      </NavLink>);

    return (
      <div className={styles.module}>
        { teamList }
      </div>
    );
  }

  /*
  * Component logic
  */
  
  componentDidMount()
  {
    this.props.getTeamList({});
  }
}

export default redux(TeamList);
