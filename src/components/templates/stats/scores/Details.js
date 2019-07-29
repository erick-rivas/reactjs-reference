/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/stats/scores/Details.module.css';

class ScoreDetails extends React.Component
{
  render()
  {
    const { scores = [] } = this.props;
    const scoreId = this.getScoreId();
    const score = DataUtil.getItem(scores, scoreId);
      
    if (score.id == null) return <Loading />;

    return (
      <div className={styles.module}>
        {/* Suggested divs */}
        <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
        <label className={cx(styles.txt, styles.minTxt)}>{score.min.toString()}</label>
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
    const scoreId = this.getScoreId()
    this.props.getScoreDetails(scoreId);
  }

  /* Args */

  getScoreId() 
  {
    return this.props.scoreId ?
      this.props.scoreId :
      this.props.match.params.score_id;
  }
}

export default redux(ScoreDetails);
