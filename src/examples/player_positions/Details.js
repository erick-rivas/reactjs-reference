/*
__Seed builder__v1.0
*/

import React from 'react';
import { useDetail } from 'seed/gql'

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/player_positions/Details.module.css';

const PLAYER_POSITION  = `
{
  playerPosition {
    id
    name
  }
}
`
function PlayerPositionDetails(props)
{
  const { player_position_id }  = props.match.params;

  const qPlayerPosition = useDetail(PLAYER_POSITION, player_position_id);

  if (qPlayerPosition.loading) return <Loading />
  if (qPlayerPosition.error) return "Error"

  const { playerPosition = {} } = qPlayerPosition.data

  return (
    <div className={styles.module}>
      <label className={styles.lbl}>Name</label><br/>
      <label className={styles.txt}>{playerPosition.name.toString()}</label>
      <br/>
    </div>
  );
}

export default PlayerPositionDetails;
