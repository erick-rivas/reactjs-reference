/*
__Seed builder__v1.0
*/

import * as React from 'react';

class UserDetails extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getUserDetails } = this.props;
    const userId = this.getUserId()
    getUserDetails(userId);
  }

  /* Args */

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
  }
}

export default UserDetails;
