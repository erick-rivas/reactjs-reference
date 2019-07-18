/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Formik, Field } from 'formik';

import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

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

          <Formik
            initialValues={player}
            validate={this.onValidate}
            onSubmit={this.onSubmit}>
          {({
            values,
            errors,
            setFieldValue,
            handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>

            {/* Suggested divs */}
            <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
            <Field type="text" name="name" className={cx(styles.txt, styles.nameTxt)} />
            <br/>
            <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label><br/>
            <FileField name="photo" className={cx(styles.fil, styles.photoFil)} accept="image/*" setFieldValue={setFieldValue}/>
            { values.photo ?
              <img src={values.photo.url} className={cx(styles.img, styles.photoImg)} /> : null }
            <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label>
            <Field name="is_active" type="checkbox" className={cx(styles.chk, styles.isActiveChk)} />
            <br/>
            {filters.team_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.teamLbl)}>Team</label>
                <Field component="select" name="team_id" className={cx(styles.ops, styles.teamOps)} >
                  <option value="">Select an option</option>
                  { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
                </Field>
                <br/>
                </div> : null}

            {this.renderError()}

            <button type="submit" className={styles.submit}>Send</button>

          </form>
          )}
          </Formik>
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
  * Component logic
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
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Events */

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

  onSubmit(values, { setSubmitting })
  {
    let player = this.state.player ? this.state.player : {};
    
    player.name = values.name;
    player.photo_id = values.photo.id;
    player.is_active = values.is_active;

    player.team_id = values.team_id;
    
    this.setState({
      player: player
    });
    this.saveData();
  }

  onValidate()
  {
  }

  /* Actions */

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

  saveData = () =>
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
}

export default redux(PlayerForm);
