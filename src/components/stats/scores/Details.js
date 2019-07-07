/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'util/DataUtil.js';

import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PlayerView from 'components/players/nav/View';
import MatchView from 'components/stats/matches/nav/View';
import Loading from 'components/helpers/Loading';

import Component from 'components/stats/scores/Details.link'

import styles from 'resources/css/stats/scores/Details.module.css';

class ScoreDetails extends Component
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
}

export default ScoreDetails;
