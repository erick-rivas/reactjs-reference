/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _TeamList from '_seed/components/teams/List';
import Options from 'components/teams/list/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/List.module.css';

class TeamList extends _TeamList
{
  render()
  {
    const { teams } = this.props;
    if (teams == null) return <Loading />;

    const { Item } = this.props;
    const { showOptions = true } = this.props;
    const { url } = this.props.match;

    const options = showOptions ? 
      <div className={styles.options}>
        <Options match={this.props.match} />
      </div>: null;

    // Important customize
    const teamList = this.renderTeamList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            title={item.id}
            subtitle={JSON.stringify(item)}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { options }
      <div className={styles.list}>
        { teamList }
      </div>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(teamId)
  {
  }
}

export default TeamList;
