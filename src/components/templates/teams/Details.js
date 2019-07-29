/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/teams/Details.module.css';

class TeamDetails extends React.Component
{
  render()
  {
    const { teams = [] } = this.props;
    const teamId = this.getTeamId();
    const team = DataUtil.getItem(teams, teamId);
      
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
    const teamId = this.getTeamId()
    this.props.getTeamDetails(teamId);
  }

  /* Args */

  getTeamId() 
  {
    return this.props.teamId ?
      this.props.teamId :
      this.props.match.params.team_id;
  }
}

export default redux(TeamDetails);
