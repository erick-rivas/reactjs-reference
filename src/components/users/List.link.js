/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as DataUtil from 'seed/util/DataUtil';
import Modal from 'components/helpers/Modal';
import UserForm from 'containers/users/Form';

class _UserList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        teams_id: this.getTeamsId(), 
      }
    };
    this.onItemClick = this.onItemClick.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Props */

  onItemClick()
  {
  }
  
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

   /* Components */

  renderUserList(map)
  {
    const { users = [] } = this.props;
    const dataset = DataUtil
      .filter(users, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }
  
}
export default _UserList;
