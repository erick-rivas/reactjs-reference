/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and CRUD operations
    - To filter data (fk) modify filters with router params or props
    - Modify ALL components if required MAINTAINING the structure of input fields.

  Fields:
    - id
    - name
    - photo
    - is_active
    - team

  Args:
    - player_id

  Filters:
    - user_id
    - team_id 
*/

import * as React from 'react';
import cx from 'classnames';

import _PlayerForm from 'sbuild/components/players/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/Form.module.css';
import { getDateInput } from 'util/FormatUtil';

class PlayerForm extends _PlayerForm
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

  constructor(props)
  {
    super(props);
  }

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

}

export default PlayerForm;
