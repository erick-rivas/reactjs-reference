/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';
import { Link } from 'react-router-dom';

import styles from 'resources/css/seed/examples/player_types/options/Details.module.css';

class PlayerTypeDetailsOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={styles.module}>
        <Svg className={styles.back}
          src={require('resources/icons/ic_arrow_back.svg')}
          onClick={this.onClickBack} />
         <div className={styles.options}>
          <Link to={`${url}/edit`} className={cx(styles.btn, styles.edit)}>Edit</Link>
          <button className={cx(styles.btn, styles.delete)} onClick={this.onClickDelete}>Delete</button>
        </div>
      </div>
    );
  }

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
    const playerTypeId = this.getPlayerTypeId();
    this.props.deletePlayerType(playerTypeId, onDelete);
  }

  onDelete(res)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onDeleteError(error) {}

  /* Args */

  getPlayerTypeId() 
  {
    return this.props.match.params.player_type_id;
  }
}

export default redux(PlayerTypeDetailsOptions);
