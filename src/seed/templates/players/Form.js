/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { Formik, Field } from 'formik';

import MultiField from 'seed/components/helpers/MultiField'
import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/players/Form.module.css';

class PlayerForm extends React.Component
{
  render()
  {
    const playerId = this.getPlayerId();
    const player = Util.get(this.props.players, playerId);
    const teams = Util.filter(this.props.teams, {})
    const playerTypes = Util.filter(this.props.playerTypes, {})

    if (player.id == null && playerId != null) return <Loading />;
    
    return (
      <div className={cls.module}>

        <div className={cls.header}>Player</div>

        <div className={cls.form}>

          <Formik
             initialValues={player}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            
            {/* name */}
            <label className={cx(cls.lbl, cls.nameLbl)}>Name</label><br/>
            <Field type="text" name="name"
              className={cx(cls.txt, cls.nameTxt)} />
            <br/>
            
            {/* photo */}
            <label className={cx(cls.lbl, cls.photoLbl)}>Photo</label><br/>
            <FileField name="photo"
              accept="image/*" setFieldValue={f.setFieldValue}
              className={cx(cls.fil, cls.photoFil)}  />
            { f.values.photo ?
              <img src={f.values.photo.url} className={cx(cls.img, cls.photoImg)} /> : null }
            
            {/* is_active */}
            <label className={cx(cls.lbl, cls.isActiveLbl)}>Is active</label>
            <Field type="checkbox" name="is_active"
              className={cx(cls.chk, cls.isActiveChk)} />
            <br/>
            
            {/* team */}
            <div>
            <label className={cx(cls.lbl, cls.teamLbl)}>Team</label>
            <Field component="select" name="team_id"
              className={cx(cls.ops, cls.teamOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            
            {/* type */}
            <div>
            <label className={cx(cls.lbl, cls.typeLbl)}>Type</label>
            <Field component="select" name="type_id"
              className={cx(cls.ops, cls.typeOps)} >
              <option value="">Select an option</option>
              { playerTypes.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {this.state.error ?
              <div className={cls.error}>{this.state.error}</div> : null}
            <button type="submit" className={cls.submit}>Send</button>
          </form>
          )}
          />
        </div>
      </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    const playerId = this.getPlayerId();
    if (playerId != null) 
      this.loadData();
    this.loadFkData();
  }

  /* Events */

  onSubmit(values)
  {
    const onSave = res =>
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    const playerId = this.getPlayerId();
    if (playerId == null) this.props.savePlayer(values, onSave)
    else this.props.setPlayer(playerId, values, onSave);
  }

  onSave(res)
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onError(error)
  {
    this.setState({
      error: 'An error has occurred, try again'
    });
  }

  /* Actions */

  loadData()
  {
    const playerId = this.getPlayerId();
    this.props.getPlayerDetails(playerId);
  }

  loadFkData() 
  {
    this.props.getTeamList({});
    this.props.getPlayerTypeList({});
  }

  /* Args */

  getPlayerId() 
  {
    return this.props.match.params.player_id;
  }
}

export default redux(PlayerForm);
