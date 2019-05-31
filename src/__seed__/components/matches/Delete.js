/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _MatchDelete extends React.Component
{
  componentDidMount()
  {
    this.deleteData();
  }

  deleteData = () =>
  {
    const { deleteMatch } = this.props;
    const matchId = this.getMatchId()
    const onDelete = res => 
    {
      if (res.ok) this.onDelete(res.body);
      else this.onError(res.body)
    }
    if (deleteMatch != null)
      deleteMatch(matchId, onDelete);
  }

  getMatchId(){}
  onDelete(res){}
  onError(error){}
}

export default _MatchDelete;
