/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/teams/details/Details.module.css';

class TeamDetails extends React.Component
{
  render()
  {
    const teamId = this.getTeamId();
    const team = Util.get(this.props.teams, teamId);
    if (team.id == null) return <Loading />;

    return (
      <div className={c.module}>
        {/* Suggested divs */}
        <label className={cx(c.lbl, c.nameLbl)}>Name</label><br/>
        <label className={cx(c.txt, c.nameTxt)}>{team.name.toString()}</label>
        <br/>
        <label className={cx(c.lbl, c.logoLbl)}>Logo</label><br/>
        <img src={team.logo.url} className={cx(c.img, c.logoImg)}></img>
        <br/>
        <label className={cx(c.lbl, c.descriptionLbl)}>Description</label><br/>
        <label className={cx(c.txt, c.descriptionTxt)}>{team.description.toString()}</label>
        <br/>
        <label className={cx(c.lbl, c.marketValueLbl)}>Market value</label><br/>
        <label className={cx(c.txt, c.marketValueTxt)}>{team.market_value.toString()}</label>
        <br/>
        <label className={cx(c.lbl, c.identityDocsLbl)}>Identity docs</label><br/>
        <label className={cx(c.txt, c.identityDocsTxt)}>{team.identity_docs.toString()}</label>
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
