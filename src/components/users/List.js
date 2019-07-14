/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import styles from 'resources/css/users/List.module.css';

class UserList extends React.Component
{
  render()
  {
    const { users } = this.props;
    if (users == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const userList = 
      this.renderUserList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onClickItem}>
          <Item 
            key={item.id} 
            id={item.id}
            user={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { userList }
    </div>
    );
  }

  renderUserList(map)
  {
    const { users = [] } = this.props;
    const dataset = DataUtil
      .filter(users, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        teams_id: this.getTeamsId(), 
      }
    };
    this.onClickItem = this.onClickItem.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Events */

  onClickItem(){}

  /* Actions */
  
  loadData = () =>
  {
    const { getUserList } = this.props;
    getUserList(this.state.filters);
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getTeamsId()
  {
    const { teams_id } = this.props.match.params;
    const { teamsId } = this.props;
    return teams_id ? teams_id : teamsId;
  }  
}

export default redux(UserList);
