/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Fields:
    - id
    - name
    - photo_url
    - is_active
    - team

  Args:
    - player_id
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _PlayerDetails from '_seed/components/players/Details';
import TeamView from 'components/teams/View';
import Loading from 'components/helpers/Loading';
import * as DataUtil from 'util/DataUtil.js';

import styles from 'util/css/players/Details.module.css';

class PlayerDetails extends _PlayerDetails
{
  render()
  {
    const { players = [] } = this.props;
    const playerId = this.getPlayerId();
    const player = DataUtil.getItem(players, playerId);
    if (player.id == null) return <Loading />;

    const { path, url } = this.props.match;
    
    return (
    <div className={styles.module}>
      {/* Suggested divs */}
      <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
      <label className={cx(styles.txt, styles.nameTxt)}>{player.name.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.photoUrlLbl)}>Photo url</label><br/>
      <label className={cx(styles.txt, styles.photoUrlTxt)}>{player.photo_url.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label><br/>
      <label className={cx(styles.txt, styles.isActiveTxt)}>{player.is_active.toString()}</label>
      <br/>
      <label className={cx(styles.lbl, styles.teamLbl)}>Team</label><br/>
      <label className={cx(styles.txt, styles.teamTxt)}>{player.team_id}</label>
      <br/>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default PlayerDetails;
