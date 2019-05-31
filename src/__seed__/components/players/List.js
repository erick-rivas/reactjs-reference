/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _PlayerList extends React.Component
{
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getPlayerList } = this.props;
    if (getPlayerList != null)
      getPlayerList(this.getFilters());
  }

  /* Props */

  getFilters(){}
}
export default _PlayerList;
