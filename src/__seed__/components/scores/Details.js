/*
__Seed builder__v1.0
*/

import * as React from 'react';

import * as Util from 'containers/helpers/Util'

class _ScoreDetails extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      score: {}
    }
  }

  componentDidMount()
  {
    this.loadData();
  }

  loadData = () =>
  {
    const { getScoreDetails } = this.props;
    const scoreId = this.getScoreId()
    if (getScoreDetails != null)
      getScoreDetails(scoreId);
  }

  /* Props */

  getScoreId() {}
}

export default _ScoreDetails;
