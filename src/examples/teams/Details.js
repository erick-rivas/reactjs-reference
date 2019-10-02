/*
__Seed builder__v1.0
*/

import React from 'react';
import { useDetail } from 'seed/gql'

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/Details.module.css';

const TEAM  = `
{
  team {
    id
    name
    description
    marketValue
    logo {
      id
    }
    rival {
      id
    }
    identityDocs {
      id
    }
    players {
      id
    }
  }
}
`
function TeamDetails(props)
{
  const { team_id }  = props.match.params;

  const qTeam = useDetail(TEAM, team_id);

  if (qTeam.loading) return <Loading />
  if (qTeam.error) return "Error"

  const { team = {} } = qTeam.data

  return (
    <div className={styles.module}>
      <label className={cx(styles.lbl, styles.nameLbl)}>Name</label>
      <br/>
      <label className={cx(styles.txt, styles.nameTxt)}>{team.name.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.logoLbl)}>Logo</label>
      <br/>
      <label className={cx(styles.txt, styles.logoTxt)}>{team.logo.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label>
      <br/>
      <label className={cx(styles.txt, styles.descriptionTxt)}>{team.description.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.marketValueLbl)}>Market value</label>
      <br/>
      <label className={cx(styles.txt, styles.marketValueTxt)}>{team.marketValue.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.identityDocsLbl)}>Identity docs</label>
      <br/>
      <label className={cx(styles.txt, styles.identityDocsTxt)}>{team.identityDocs.toString()}</label>
      <br/>
    </div>
  );
}

export default TeamDetails;
