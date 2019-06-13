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
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _MatchDetails from '_seed/components/matches/Details';
import Options from 'components/matches/details/Options';
import TeamView from 'components/teams/View';
import ScoreView from 'components/scores/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/matches/Details.module.css';

class MatchDetails extends _MatchDetails
{
  render()
  {
    const { matches = [] } = this.props;
    const matchId = this.getMatchId();
    const match = DataUtil.getItem(matches, matchId);
    if (match.id == null) return <Loading />;

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
          component={ props => <ScoreView showListOptions={false} {...props}/> } />
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

export default MatchDetails;
