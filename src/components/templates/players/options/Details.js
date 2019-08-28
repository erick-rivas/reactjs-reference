/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';
import { Link } from 'react-router-dom';

import c from 'resources/css/templates/players/options/Details.module.css';

class PlayerDetailsOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    
    return (
      <div className={c.module}>
        <Svg className={c.back}
          src={require('resources/icons/ic_arrow_back.svg')}
          onClick={this.onClickBack} />
         <div className={c.options}>
          <Link to={`${url}/edit`} className={cx(c.btn, c.edit)}>Edit</Link>
          <button className={cx(c.btn, c.delete)} onClick={this.onClickDelete}>Delete</button>
        </div>
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  /* Events */

  onClickBack()
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onClickDelete()
  {
    const onDelete = res =>
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    const playerId = this.getPlayerId();
    this.props.deletePlayer(playerId, onDelete);
  }

  onDelete(res)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onDeleteError(error)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  /* Args */

  getPlayerId() 
  {
    return this.props.playerId ?
      this.props.playerId :
      this.props.match.params.player_id;
  }
}

export default redux(PlayerDetailsOptions);
