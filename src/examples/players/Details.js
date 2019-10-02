/*
__Seed builder__v1.0
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
      <label className={cx(styles.lbl, styles.nameLbl)}>Name</label>
      <br/>
      <label className={cx(styles.txt, styles.nameTxt)}>{player.name.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label>
      <br/>
      <label className={cx(styles.txt, styles.photoTxt)}>{player.photo.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label>
      <br/>
      <label className={cx(styles.txt, styles.isActiveTxt)}>{player.isActive.toString()}</label>
      <br/>
    </div>
  );
}

export default PlayerDetails;
