/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _MatchList from '_seed/components/matches/List';
import Options from 'components/matches/list/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/List.module.css';

class MatchList extends _MatchList
{
  render()
  {
    const { matches } = this.props;
    if (matches == null) return <Loading />;

    const { Item } = this.props;
    const { showOptions = true } = this.props;
    const { url } = this.props.match;

    const options = showOptions ? 
      <div className={styles.options}>
        <Options match={this.props.match} />
      </div>: null;

    // Important customize
    const matchList = this.renderMatchList(item =>
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
        { matchList }
      </div>
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
