/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class _UserDetails extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.onBackClick = this.onBackClick.bind(this);
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


  /* Filters */

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
  }


  /* Events */

  onBackClick() {}
}

export default _UserDetails;
