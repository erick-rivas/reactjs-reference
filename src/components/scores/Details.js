/*
__Seed builder__v1.0
  
  Fields:
    - id
    - min
    - player
    - match
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _ScoreDetails from '_seed/components/scores/Details';
import Options from 'components/scores/details/Options';
import PlayerView from 'components/players/View';
import MatchView from 'components/matches/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/scores/Details.module.css';

class ScoreDetails extends _ScoreDetails
{
  render()
  {
    const { scores = [] } = this.props;
    const scoreId = this.getScoreId();
    const score = DataUtil.getItem(scores, scoreId);
    if (score.id == null) return <Loading />;

    const { showOptions = true } = this.props;
    const { path, url } = this.props.match;

    const options = showOptions ? 
    <div className={styles.options}>
      <Options match={this.props.match} 
        onBackClick={this.onBackClick}/>
    </div>: null;

    return (
    <div className={styles.module}>
      { options }
      <div className={styles.details}>
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
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onBackClick() 
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }
}

export default ScoreDetails;
