/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/teams/List.module.css';

class TeamList extends React.Component
{
  render()
  {
    const { teams = [] } = this.props;
    if (teams == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const teamList = 
      teams.map(item =>
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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
  
  componentDidMount()
  {
    this.props.getTeamList();
  }
}

export default redux(TeamList);
