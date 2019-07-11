/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/templates/teams/List.link';

import styles from 'resources/css/templates/teams/List.module.css';

class TeamList extends Component
{
  render()
  {
    const { teams } = this.props;
    if (teams == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const teamList = 
      this.renderTeamList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            team={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { teamList }
    </div>
    );
  }
}

export default TeamList;
