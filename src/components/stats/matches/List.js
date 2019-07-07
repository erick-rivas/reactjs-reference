/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/stats/matches/List.link';

import styles from 'resources/css/stats/matches/List.module.css';

class MatchList extends Component
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
            match={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { matchList }
    </div>
    );
  }
}

export default MatchList;
