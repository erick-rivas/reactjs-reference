/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/stats/scores/details/Details.module.css';

class ScoreDetails extends React.Component
{
  render()
  {
    const scoreId = this.getScoreId();
    const score = Util.get(this.props.scores, scoreId);
    if (score.id == null) return <Loading />;

    return (
      <div className={c.module}>
        {/* Suggested divs */}
        <label className={cx(c.lbl, c.minLbl)}>Min</label><br/>
        <label className={cx(c.txt, c.minTxt)}>{score.min.toString()}</label>
        <br/>
      </div>
    );
  }

  /*
  * Component Logic
  */

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
