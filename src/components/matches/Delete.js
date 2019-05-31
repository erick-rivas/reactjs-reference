/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _MatchDelete from '__seed__/components/matches/Delete'

import styles from 'util/css/matches/Delete.module.css'

class MatchDelete extends _MatchDelete
{
  render()
  {
    return (
      <div className={styles.module}>
      </div>);
  }

  getMatchId()
  {
    //Suggested id
    return this.props.matchId;
  }

  onDelete(res)
  {
  }

  onError(error)
  {
  }
}

export default MatchDelete;
