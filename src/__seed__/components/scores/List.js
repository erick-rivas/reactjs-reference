/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _ScoreList extends React.Component
{
  componentDidMount()
  {
    this.loadData();
  }
  
  loadData = () =>
  {
    const { getScoreList } = this.props;
    if (getScoreList != null)
      getScoreList(this.getFilters());
  }

  /* Props */

  getFilters(){}
}
export default _ScoreList;
