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
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
            {/* name */}
            <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
            <Field type="text" name="name" className={cx(styles.txt, styles.nameTxt)} />
            <br/>
            {/* photo */}
            <label className={cx(styles.lbl, styles.photoLbl)}>Photo</label><br/>
            <FileField name="photo" className={cx(styles.fil, styles.photoFil)} accept="image/*" setFieldValue={setFieldValue}/>
            { values.photo ?
              <img src={values.photo.url} className={cx(styles.img, styles.photoImg)} /> : null }
            {/* is_active */}
            <label className={cx(styles.lbl, styles.isActiveLbl)}>Is active</label>
            <Field name="is_active" type="checkbox" className={cx(styles.chk, styles.isActiveChk)} />
            <br/>
            {/* team */}
            <div>
            <label className={cx(styles.lbl, styles.teamLbl)}>Team</label>
            <Field component="select" name="team_id" className={cx(styles.ops, styles.teamOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>

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
    return (error ? <div className={styles.error}>{error}</div> : null);
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      player: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount()
  {
    const playerId = this.getPlayerId();
    if (playerId != null) 
      this.loadData();
    this.loadFkData();
  }

  /* Events */

  onSubmit(values, { setSubmitting })
  {
    let player = this.state.player ? this.state.player : {};
    
    player.name = values.name;
    player.photo_id = values.photo.id;
    player.is_active = values.is_active;

    player.team_id = values.team_id;
    
    this.saveData(player);
  }

  onValidate(){}

  /* Actions */

  loadData()
  {
    const playerId = this.getPlayerId();
    const callback = res => 
    {
      const playerId = this.getPlayerId();
      const player = DataUtil.getItem(this.props.players, playerId);
      if (player.id != null)
        this.setState({
          player: Object.assign({}, this.state.player, player)
        })
    }
    this.props.getPlayerDetails(playerId, callback);
    
  }

  loadFkData() 
  {
    this.props.getTeamList();
  }

  saveData(player)
  {
    const playerId = this.getPlayerId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (playerId == null)
      this.props.savePlayer(player, onSave)
    else
      this.props.setPlayer(playerId, player, onSave);
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

  /* Args */

  getPlayerId() 
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }
}

export default redux(PlayerForm);
