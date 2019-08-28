/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/stats/matches/details/Details.module.css';

class MatchDetails extends React.Component
{
  render()
  {
    const matchId = this.getMatchId();
    const match = Util.get(this.props.matches, matchId);
    if (match.id == null) return <Loading />;

    return (
      <div className={styles.module}>
        {/* Suggested divs */}
        <label className={cx(styles.lbl, styles.dateLbl)}>Date</label><br/>
        <label className={cx(styles.txt, styles.dateTxt)}>{match.date.toString()}</label>
        <br/>
        <label className={cx(styles.lbl, styles.typeLbl)}>Type</label><br/>
        <label className={cx(styles.txt, styles.typeTxt)}>{match.type.toString()}</label>
        <br/>
      </div>
    );
  }

  /*
  * Component Logic
  */

  componentDidMount()
  {
    const matchId = this.getMatchId()
    this.props.getMatchDetails(matchId);
  }

  /* Args */

  getMatchId() 
  {
    return this.props.matchId ?
      this.props.matchId :
      this.props.match.params.match_id;
  }
}

export default redux(MatchDetails);
