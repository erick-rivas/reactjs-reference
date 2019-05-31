/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _TeamList extends React.Component
{
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getTeamList } = this.props;
    if (getTeamList != null)
      getTeamList(this.getFilters());
  }

  /* Props */

  getFilters(){}
}
export default _TeamList;
