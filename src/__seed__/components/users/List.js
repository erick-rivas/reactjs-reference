/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _UserList extends React.Component
{
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getUserList } = this.props;
    if (getUserList != null)
      getUserList(this.getFilters());
  }

  /* Props */

  getFilters(){}
}
export default _UserList;
