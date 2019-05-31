/*
__Seed builder__v1.0
Fields:
    - id
    - name
    - photo_url
    - is_active
    - team
*/

import * as React from 'react';

import _PlayerDetails from '__seed__/components/players/Details';
import * as Util from 'containers/helpers/Util'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/Details.module.css';

class PlayerDetails extends _PlayerDetails
{
  render()
  {
    const { players = [] } = this.props;
    const playerId = this.getPlayerId();
    const player = Util.getItem(players, playerId);

    if (player.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.name}>{'name:' + player.name}</div>
        <div className={styles.photoUrl}>{'photo_url:' + player.photo_url}</div>
        <div className={styles.isActive}>{'is_active:' + player.is_active}</div>
        <div className={styles.team}>{'team:' + player.team.id}</div>

      </div>
    );
  }

  getPlayerId()
  {
    //Suggested id
    return this.props.playerId;
  }
}

export default PlayerDetails;
