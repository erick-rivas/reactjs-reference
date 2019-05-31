/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _UserDetails extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getUserDetails } = this.props;
    const userId = this.getUserId()
    if (getUserDetails != null)
      getUserDetails(userId);
  }

  /* Props */

  getUserId() {}
}

export default _UserDetails;
