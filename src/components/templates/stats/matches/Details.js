/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/stats/matches/Details.module.css';

class MatchDetails extends React.Component
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
      </div>
    );
  }

  /*
  * Component Logic
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

  /* Actions */

  loadData = () =>
  {
    const matchId = this.getMatchId()
    this.props.getMatchDetails(matchId);
  }

  /* Args */

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }
}

export default redux(MatchDetails);
