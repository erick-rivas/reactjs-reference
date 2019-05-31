/*
__Seed builder__v1.0
Fields:
    - id
    - date
    - type
    - local
    - visitor
    - scores
*/

import * as React from 'react';

import _MatchDetails from '__seed__/components/matches/Details';
import * as Util from 'containers/helpers/Util'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/Details.module.css';

class MatchDetails extends _MatchDetails
{
  render()
  {
    const { matches = [] } = this.props;
    const matchId = this.getMatchId();
    const match = Util.getItem(matches, matchId);

    if (match.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.date}>{'date:' + match.date}</div>
        <div className={styles.type}>{'type:' + match.type}</div>
        <div className={styles.local}>{'local:' + match.local.id}</div>
        <div className={styles.visitor}>{'visitor:' + match.visitor.id}</div>
        <div className={styles.scores}>{'scores:' + match.scores.reduce((lv, v) => lv + v.id + ",", "")}</div>

      </div>
    );
  }

  getMatchId()
  {
    //Suggested id
    return this.props.matchId;
  }
}

export default MatchDetails;
