/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/seed/examples/teams/details/Details.module.css';

class TeamDetails extends React.Component
{
  render()
  {
    const teamId = this.getTeamId();
    const team = Util.get(this.props.teams, teamId);
    if (team.id == null) return <Loading />;

    return (
      <div className={styles.module}>
        {/* Suggested divs */}
        <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
        <label className={cx(styles.txt, styles.nameTxt)}>{team.name.toString()}</label>
        <br/>
        <label className={cx(styles.lbl, styles.logoLbl)}>Logo</label><br/>
        <img src={team.logo.url} className={cx(styles.img, styles.logoImg)}></img>
        <br/>
        <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label><br/>
        <label className={cx(styles.txt, styles.descriptionTxt)}>{team.description.toString()}</label>
        <br/>
        <label className={cx(styles.lbl, styles.marketValueLbl)}>Market value</label><br/>
        <label className={cx(styles.txt, styles.marketValueTxt)}>{team.market_value.toString()}</label>
        <br/>
        <label className={cx(styles.lbl, styles.identityDocsLbl)}>Identity docs</label><br/>
        <label className={cx(styles.txt, styles.identityDocsTxt)}>{team.identity_docs.toString()}</label>
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