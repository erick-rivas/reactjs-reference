/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/matches/details/Details.module.css';

class MatchDetails extends React.Component
{
  render()
  {
    const matchId = this.getMatchId();
    const match = Util.get(this.props.matches, matchId);
    if (match.id == null) return <Loading />;

    return (
      <div className={cls.module}>
        {/* Suggested divs */}
        <label className={cx(cls.lbl, cls.dateLbl)}>Date</label><br/>
        <label className={cx(cls.txt, cls.dateTxt)}>{match.date.toString()}</label>
        <br/>
        <label className={cx(cls.lbl, cls.typeLbl)}>Type</label><br/>
        <label className={cx(cls.txt, cls.typeTxt)}>{match.type.toString()}</label>
        <br/>
      </div>
    );
  }

  componentDidMount()
  {
    const matchId = this.getMatchId()
    this.props.getMatchDetails(matchId);
  }

  getMatchId() 
  {
    return this.props.match.params.match_id;
  }
}

export default redux(MatchDetails);
