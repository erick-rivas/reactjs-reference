/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil.js';

import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TeamView from 'components/templates/teams/nav/View';
import PlayerView from 'components/templates/players/nav/View';
import Loading from 'components/helpers/Loading';

import Component from 'components/templates/teams/Details.link'

import styles from 'resources/css/templates/teams/Details.module.css';

class TeamDetails extends Component
{
  render()
  {
    const { teams = [] } = this.props;
    const teamId = this.getTeamId();
    const team = DataUtil.getItem(teams, teamId);
      
    if (team.id == null) return <Loading />;

    const { path, url } = this.props.match;
    
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
        <label className={cx(styles.lbl, styles.rivalLbl)}>Rival</label><br/>
        <label className={cx(styles.txt, styles.rivalTxt)}>{team.rival_id}</label>
        <br/>
        <label className={cx(styles.lbl, styles.playersLbl)}>Players</label><br/>
        <Route path={`${path}`}
          component={ props => <PlayerView {...props}/> } />
        <br/>
      </div>
    );
  }
}

export default TeamDetails;