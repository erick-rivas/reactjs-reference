/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import styles from 'resources/css/templates/players/details/Details.module.css';

class PlayerDetails extends React.Component
{
  render()
  {
    const playerId = this.getPlayerId();
    const player = Util.get(this.props.players, playerId);
    if (player.id == null) return <Loading />;

    return (
      <div className={styles.module}>
        {/* Suggested divs */}
        <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
        <label className={cx(styles.txt, styles.nameTxt)}>{player.name.toString()}</label>
        <br/>
        <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label><br/>
        <img src={player.photo.url} className={cx(styles.img, styles.photoImg)}></img>
        <br/>
        <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label><br/>
        <label className={cx(styles.txt, styles.isActiveTxt)}>{player.is_active.toString()}</label>
        <br/>
      </div>
    );
  }

  /*
  * Component Logic
  */

  componentDidMount()
  {
    const playerId = this.getPlayerId()
    this.props.getPlayerDetails(playerId);
  }

  /* Args */

  getPlayerId() 
  {
    return this.props.playerId ?
      this.props.playerId :
      this.props.match.params.player_id;
  }
}

export default redux(PlayerDetails);
