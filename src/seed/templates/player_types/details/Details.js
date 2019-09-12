/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';

import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/player_types/details/Details.module.css';

class PlayerTypeDetails extends React.Component
{
  render()
  {
    const playerTypeId = this.getPlayerTypeId();
    const playerType = Util.get(this.props.playerTypes, playerTypeId);
    if (playerType.id == null) return <Loading />;

    return (
      <div className={cls.module}>
        {/* Suggested divs */}
        <label className={cx(cls.lbl, cls.nameLbl)}>Name</label><br/>
        <label className={cx(cls.txt, cls.nameTxt)}>{playerType.name.toString()}</label>
        <br/>
      </div>
    );
  }

  componentDidMount()
  {
    const playerTypeId = this.getPlayerTypeId()
    this.props.getPlayerTypeDetails(playerTypeId);
  }

  getPlayerTypeId() 
  {
    return this.props.match.params.player_type_id;
  }
}

export default redux(PlayerTypeDetails);
