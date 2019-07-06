/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading
    - Modify ALL components if required

  Fields:
    - id
    - name
    - logo
    - description
    - market_value
    - identity_docs
    - players

  Args:
    - team_id
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _TeamDetails from 'sbuild/components/teams/Details';
import PlayerView from 'components/nav/players/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/teams/Details.module.css';

class TeamDetails extends _TeamDetails
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
      <label className={cx(styles.lbl, styles.playersLbl)}>Players</label><br/>
      <Route path={`${path}`}
        component={ props => <PlayerView {...props}/> } />
      <br/>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default TeamDetails;
