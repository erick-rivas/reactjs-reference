import React from "react";
import { useDetail } from "seed/gql"

import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/teams/Details.module.css";

const TEAM  = `
{
  team {
    name
    description
    marketValue
    logo { }
    rival { }
    identityDocs { }
    players { }
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
      <label className={styles.lbl}>Name</label><br/>
      <label className={styles.txt}>{team.name.toString()}</label>
      <br/>
      <label className={styles.lbl}>Logo</label><br/>
      <label className={styles.txt}>{team.logo.toString()}</label>
      <br/>
      <label className={styles.lbl}>Description</label><br/>
      <label className={styles.txt}>{team.description.toString()}</label>
      <br/>
      <label className={styles.lbl}>Market value</label><br/>
      <label className={styles.txt}>{team.marketValue.toString()}</label>
      <br/>
      <label className={styles.lbl}>Identity docs</label><br/>
      <label className={styles.txt}>{team.identityDocs.toString()}</label>
      <br/>
    </div>
  );
}

export default TeamDetails;
