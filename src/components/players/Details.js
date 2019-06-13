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
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import _PlayerDetails from '_seed/components/players/Details';
import Options from 'components/players/details/Options';
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

    const { showOptions = true } = this.props;
    const { path, url } = this.props.match;

    const options = showOptions ? 
    <div className={styles.options}>
      <Options match={this.props.match} 
        onBackClick={this.onBackClick}/>
    </div>: null;

    return (
    <div className={styles.module}>
      { options }
      <div className={styles.details}>
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
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onBackClick() 
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }
}

export default PlayerDetails;
