/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading
    - Modify ALL components if required

  Fields:
    - id
    - min
    - player
    - match

  Args:
    - score_id
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _ScoreDetails from 'sbuild/components/stat/scores/Details';
import PlayerView from 'components/nav/players/View';
import MatchView from 'components/nav/stat/matches/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/stat/scores/Details.module.css';

class ScoreDetails extends _ScoreDetails
{
  render()
  {
    const { scores = [] } = this.props;
    const scoreId = this.getScoreId();
    const score = DataUtil.getItem(scores, scoreId);
    if (score.id == null) return <Loading />;

    const { path, url } = this.props.match;

    return (
    <div className={styles.module}>
      {/* Suggested divs */}
      <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
      <label className={cx(styles.txt, styles.minTxt)}>{score.min.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.playerLbl)}>Player</label><br/>
      <label className={cx(styles.txt, styles.playerTxt)}>{score.player_id}</label>
      <br/>
      <label className={cx(styles.lbl, styles.matchLbl)}>Match</label><br/>
      <label className={cx(styles.txt, styles.matchTxt)}>{score.match_id}</label>
      <br/>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default ScoreDetails;
