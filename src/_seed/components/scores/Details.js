/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class _ScoreDetails extends React.Component
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
    const { getScoreDetails } = this.props;
    const scoreId = this.getScoreId()
    getScoreDetails(scoreId);
  }


  /* Filters */

  getScoreId() 
  {
    const { score_id } = this.props.match.params;
    const { scoreId } = this.props;
    return score_id ? score_id : scoreId;
  }


  /* Events */

  onBackClick() {}
}

export default _ScoreDetails;
