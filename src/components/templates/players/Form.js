/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import { getDateInput } from 'seed/util/FormatUtil';
import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/players/Form.module.css';

class PlayerForm extends React.Component
{
  render()
  {
    const { player = {} } = this.state;
    const { teams = [] } = this.props;
    const { filters } = this.state;
    const playerId = this.getPlayerId();
    if (player.id == null && playerId != null) return <Loading />;
    
    return (
    <div className={styles.module}>
      <div className={styles.header}>
        Player
      </div>

      <div className={styles.form}>
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
          <input type="text" name="name" className={cx(styles.txt, styles.nameTxt)} value={player.name} onChange={this.onNameChange}></input>
          <br/>
          <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label><br/>
          <input name="photo" type="hidden" value={player.photo ? player.photo.id : null}/>
          <form encType="multipart/form-data">
            <input name="file" type="file" className={cx(styles.fil, styles.photoFil)} accept="image/*" onChange={this.onPhotoChange}></input>
          </form>
          {player.photo ?
            <img src={player.photo.url} className={cx(styles.img, styles.photoImg)} /> : null }
          <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label>
          <input name="isActive" type="checkbox" className={cx(styles.chk, styles.isActiveChk)} checked={player.is_active} onChange={this.onIsActiveChange}></input>
          <br/>
          {filters.team_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.teamLbl)}>Team</label>
              <select name="team" className={cx(styles.ops, styles.teamOps)} value={player.team_id} onChange={this.onTeamChange}>
              { teams.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}

          {this.renderError()}

          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    </div>
    );
  }

  renderError()
  {
    const { error } = this.state;
    return ( 
    error ? <div className={styles.error}>{error}</div> : null
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      player: {
        team_id: this.getTeamId(),
      },
      filters: {
        user_id: this.getUserId(),
        team_id: this.getTeamId(), 
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
    this.onIsActiveChange = this.onIsActiveChange.bind(this);
    this.onTeamChange = this.onTeamChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Props */

  onSave(res)
  {
    //Suggested method
    this.props.onClose();
  }

  onError(error)
  {
    //Suggested method
    this.setState({
      error: 'An error has occurred, try again'
    });
  }

  loadData = () =>
  {
    const { getPlayerDetails } = this.props;
    const playerId = this.getPlayerId();
    if (playerId != null) {
      const callback = res => 
      {
        const playerId = this.getPlayerId();
        const player = DataUtil.getItem(this.props.players, playerId);
        if (player.id != null)
          this.setState({
            player: Object.assign({}, this.state.player, player)
          })
      }
      getPlayerDetails(playerId, callback);
    }
  }

  loadFkData = () => 
  {
    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
  }

  fillData = e =>
  {
    let player = this.state.player ? this.state.player : {};
    player.name = player.name ? player.name : e.target.name.value;
    player.photo = player.photo ? player.photo : e.target.photo.value;
    player.is_active = player.is_active ? player.is_active : e.target.isActive.checked;
    player.team_id = player.team_id ? player.team_id : e.target.team.value;

    this.setState({
      player: player
    });
  }

  saveData = e =>
  {
    const { savePlayer, setPlayer } = this.props;
    const playerId = this.getPlayerId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (playerId == null && savePlayer != null)
      savePlayer(this.state.player, onSave)
    if (playerId != null && setPlayer != null)
      setPlayer(playerId, this.state.player, onSave);
  }

  /* Args */

  getPlayerId() 
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getTeamId()
  {
    const { team_id } = this.props.match.params;
    const { teamId } = this.props;
    return team_id ? team_id : teamId;
  }

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.fillData(e);
    this.saveData(e);
  }
  
  onNameChange(e)
  {
    let player = this.state.player ? this.state.player : {};
    player.name = e.target.value;  
    this.setState({
      player: player
    });
  }
  
  onPhotoChange(e)
  {
    const { uploadFile } = this.props;
    const callback = res => {
      let player = this.state.player ? this.state.player : {};
      player.photo = res.body;
      player.photo_id = res.body.id;
      this.setState({
        player: player
      });
    }
    uploadFile(e.target.form, callback);
  }
  
  onIsActiveChange(e)
  {
    let player = this.state.player ? this.state.player : {};
    player.is_active = e.target.checked;  
    this.setState({
      player: player
    });
  }
  
  onTeamChange(e)
  {
    let player = this.state.player ? this.state.player : {};
    player.team_id = e.target.value;
    this.setState({
      player: player
    });
  }
}

export default redux(PlayerForm);
