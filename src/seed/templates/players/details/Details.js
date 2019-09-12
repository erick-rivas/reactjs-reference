/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/players/details/Details.module.css';

class PlayerDetails extends React.Component
{
  render()
  {
    const playerId = this.getPlayerId();
    const player = Util.get(this.props.players, playerId);
    if (player.id == null) return <Loading />;

    return (
      <div className={cls.module}>
        {/* Suggested divs */}
        <label className={cx(cls.lbl, cls.nameLbl)}>Name</label><br/>
        <label className={cx(cls.txt, cls.nameTxt)}>{player.name.toString()}</label>
        <br/>
        <label className={cx(cls.lbl, cls.photoLbl)}>Photo</label><br/>
        <img src={player.photo.url} className={cx(cls.img, cls.photoImg)}></img>
        <br/>
        <label className={cx(cls.lbl, cls.isActiveLbl)}>Is active</label><br/>
        <label className={cx(cls.txt, cls.isActiveTxt)}>{player.is_active.toString()}</label>
        <br/>
      </div>
    );
  }

  componentDidMount()
  {
    const playerId = this.getPlayerId()
    this.props.getPlayerDetails(playerId);
  }

  getPlayerId() 
  {
    return this.props.match.params.player_id;
  }
}

export default redux(PlayerDetails);
