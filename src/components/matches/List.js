/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Filters:
    - user_id
    - local_id
    - visitor_id
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _MatchList from '_seed/components/matches/List';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/List.module.css';

class MatchList extends _MatchList
{
  render()
  {
    const { matches } = this.props;
    if (matches == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;


    const matchList = 
      this.renderMatchList(item =>
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
      { matchList }
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(matchId)
  {
  }
}

export default MatchList;
