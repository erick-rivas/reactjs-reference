/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/Item.module.css'

class PlayerItem extends React.Component
{
  render()
  {
    const { player = {} } = this.props;

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
}

export default PlayerItem;
