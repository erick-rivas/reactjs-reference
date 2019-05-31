/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _MatchList extends React.Component
{
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getMatchList } = this.props;
    if (getMatchList != null)
      getMatchList(this.getFilters());
  }

  /* Props */

  getFilters(){}
}
export default _MatchList;
