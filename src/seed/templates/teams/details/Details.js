/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/teams/details/Details.module.css';

class TeamDetails extends React.Component
{
  render()
  {
    const teamId = this.getTeamId();
    const team = Util.get(this.props.teams, teamId);
    if (team.id == null) return <Loading />;

    return (
      <div className={cls.module}>
        {/* Suggested divs */}
        <label className={cx(cls.lbl, cls.nameLbl)}>Name</label><br/>
        <label className={cx(cls.txt, cls.nameTxt)}>{team.name.toString()}</label>
        <br/>
        <label className={cx(cls.lbl, cls.logoLbl)}>Logo</label><br/>
        <img src={team.logo.url} className={cx(cls.img, cls.logoImg)}></img>
        <br/>
        <label className={cx(cls.lbl, cls.descriptionLbl)}>Description</label><br/>
        <label className={cx(cls.txt, cls.descriptionTxt)}>{team.description.toString()}</label>
        <br/>
        <label className={cx(cls.lbl, cls.marketValueLbl)}>Market value</label><br/>
        <label className={cx(cls.txt, cls.marketValueTxt)}>{team.market_value.toString()}</label>
        <br/>
        <label className={cx(cls.lbl, cls.identityDocsLbl)}>Identity docs</label><br/>
        <label className={cx(cls.txt, cls.identityDocsTxt)}>{team.identity_docs.toString()}</label>
        <br/>
      </div>
    );
  }

  componentDidMount()
  {
    const teamId = this.getTeamId()
    this.props.getTeamDetails(teamId);
  }

  getTeamId() 
  {
    return this.props.match.params.team_id;
  }
}

export default redux(TeamDetails);
