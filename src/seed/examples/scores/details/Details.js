/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/seed/examples/scores/details/Details.module.css';

class ScoreDetails extends React.Component
{
  render()
  {
    const scoreId = this.getScoreId();
    const score = Util.get(this.props.scores, scoreId);
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

  componentDidMount()
  {
    const scoreId = this.getScoreId()
    this.props.getScoreDetails(scoreId);
  }

  getScoreId() 
  {
    return this.props.match.params.score_id;
  }
}

export default redux(ScoreDetails);
