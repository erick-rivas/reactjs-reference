/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PlayerView from 'components/templates/players/nav/View';
import MatchView from 'components/templates/stats/matches/nav/View';
import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/stats/scores/Details.module.css';

class ScoreDetails extends React.Component
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
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

  /* Args */

  getScoreId() 
  {
    const { score_id } = this.props.match.params;
    const { scoreId } = this.props;
    return score_id ? score_id : scoreId;
  }
}

export default redux(ScoreDetails);
