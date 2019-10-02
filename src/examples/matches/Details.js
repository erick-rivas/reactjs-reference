/*
__Seed builder__v1.0
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
      <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
      <br/>
      <label className={cx(styles.txt, styles.dateTxt)}>{match.date.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
      <br/>
      <label className={cx(styles.txt, styles.typeTxt)}>{match.type.toString()}</label>
      <br/>
    </div>
  );
}

export default MatchDetails;
