/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading
    - Modify ALL components if required

  Fields:
    - id
    - date
    - type
    - local
    - visitor
    - scores

  Args:
    - match_id
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _MatchDetails from '_seed/components/stats/matches/Details';
import TeamView from 'components/teams/View';
import ScoreView from 'components/stats/scores/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/stats/matches/Details.module.css';

class MatchDetails extends _MatchDetails
{
  render()
  {
    const { matches = [] } = this.props;
    const matchId = this.getMatchId();
    const match = DataUtil.getItem(matches, matchId);
    if (match.id == null) return <Loading />;

    const { path, url } = this.props.match;

    return (
    <div className={styles.module}>
      {/* Suggested divs */}
      <label className={cx(styles.lbl, styles.dateLbl)}>Date</label><br/>
      <label className={cx(styles.txt, styles.dateTxt)}>{match.date.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.typeLbl)}>Type</label><br/>
      <label className={cx(styles.txt, styles.typeTxt)}>{match.type.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.localLbl)}>Local</label><br/>
      <label className={cx(styles.txt, styles.localTxt)}>{match.local_id}</label>
      <br/>
      <label className={cx(styles.lbl, styles.visitorLbl)}>Visitor</label><br/>
      <label className={cx(styles.txt, styles.visitorTxt)}>{match.visitor_id}</label>
      <br/>
      <label className={cx(styles.lbl, styles.scoresLbl)}>Scores</label><br/>
      <Route path={`${path}`}
        component={ props => <ScoreView {...props}/> } />
      <br/>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default MatchDetails;
