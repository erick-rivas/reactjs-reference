/*
__Seed builder__v0.1.7
*/

import React from 'react';
import { useDetail } from 'seed/gql'

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/players/Details.module.css';

const PLAYER  = `
{
  player {
    id
    name
    isActive
    photo {
      id
    }
    team {
      id
    }
    position {
      id
    }
  }
}
`
function PlayerDetails(props)
{
  const { player_id }  = props.match.params;

  const qPlayer = useDetail(PLAYER, player_id);

  if (qPlayer.loading) return <Loading />
  if (qPlayer.error) return "Error"

  const { player = {} } = qPlayer.data

  return (
    <div className={styles.module}>
      <label className={styles.lbl}>Name</label><br/>
      <label className={styles.txt}>{player.name.toString()}</label>
      <br/>
      <label className={styles.lbl}>Photo</label><br/>
      <label className={styles.txt}>{player.photo.toString()}</label>
      <br/>
      <label className={styles.lbl}>Is active</label><br/>
      <label className={styles.txt}>{player.isActive.toString()}</label>
      <br/>
    </div>
  );
}

export default PlayerDetails;
