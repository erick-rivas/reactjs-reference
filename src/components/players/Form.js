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

import _PlayerForm from '__seed__/components/players/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/Form.module.css';
import { getDateInput } from 'util/Format';

class PlayerForm extends _PlayerForm
{
  render()
  {
    const { player = {} } = this.state;
    const playerId = this.getPlayerId();

    if (player.id == null && playerId != null) return <Loading />
    return (
      <div className={styles.module}>
        <form onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          {'name: '} 
          <input type="text" className={styles.name} value={player.name} onChange={this.onNameChange}></input><br/>
          {'photo_url: '} 
          <input type="text" className={styles.photoUrl} value={player.photo_url} onChange={this.onPhotoUrlChange}></input><br/>
          {'is_active: '} 
          <input type="checkbox" className={styles.isActive} checked={player.is_active} onChange={this.onIsActiveChange}></input><br/>
          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    );
  }

  getPlayerId() 
  {
    //Suggested id
    return this.props.playerId;
  }
  getTeamId()
  {
    //Suggested id
    return this.props.teamId;
  } 

  onSave(res)
  {
  }

  onError(error)
  {
  }
}

export default PlayerForm;
