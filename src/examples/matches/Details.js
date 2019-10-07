/*
__Seed builder__v0.1.7
*/

import React from 'react';
import { useDetail } from 'seed/gql'

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/matches/Details.module.css';

const MATCH  = `
{
  match {
    id
    date
    type
    local {
      id
    }
    visitor {
      id
    }
    scores {
      id
    }
  }
}
`
function MatchDetails(props)
{
  const { match_id }  = props.match.params;

  const qMatch = useDetail(MATCH, match_id);

  if (qMatch.loading) return <Loading />
  if (qMatch.error) return "Error"

  const { match = {} } = qMatch.data

  return (
    <div className={styles.module}>
      <label className={styles.lbl}>Date</label><br/>
      <label className={styles.txt}>{match.date.toString()}</label>
      <br/>
      <label className={styles.lbl}>Type</label><br/>
      <label className={styles.txt}>{match.type.toString()}</label>
      <br/>
    </div>
  );
}

export default MatchDetails;
