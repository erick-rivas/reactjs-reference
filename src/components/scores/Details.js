/*
__Seed builder__v1.0
Fields:
    - id
    - min
    - player
    - match
*/

import * as React from 'react';

import _ScoreDetails from '__seed__/components/scores/Details';
import * as Util from 'containers/helpers/Util'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/Details.module.css';

class ScoreDetails extends _ScoreDetails
{
  render()
  {
    const { scores = [] } = this.props;
    const scoreId = this.getScoreId();
    const score = Util.getItem(scores, scoreId);

    if (score.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.min}>{'min:' + score.min}</div>
        <div className={styles.player}>{'player:' + score.player.id}</div>
        <div className={styles.match}>{'match:' + score.match.id}</div>

      </div>
    );
  }

  getScoreId()
  {
    //Suggested id
    return this.props.scoreId;
  }
}

export default ScoreDetails;
