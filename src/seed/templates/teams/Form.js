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

import cls from 'resources/css/seed/templates/teams/Form.module.css';

class TeamForm extends React.Component
{
  render()
  {
    const teamId = this.getTeamId();
    const team = Util.get(this.props.teams, teamId);
    const teams = Util.filter(this.props.teams, {})

    if (team.id == null && teamId != null) return <Loading />;
    
    return (
      <div className={cls.module}>

        <div className={cls.header}>Team</div>

        <div className={cls.form}>

          <Formik
             initialValues={team}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            
            {/* name */}
            <label className={cx(cls.lbl, cls.nameLbl)}>Name</label><br/>
            <Field type="text" name="name"
              className={cx(cls.txt, cls.nameTxt)} />
            <br/>
            
            {/* logo */}
            <label className={cx(cls.lbl, cls.logoLbl)}>Logo</label><br/>
            <FileField name="logo"
              accept="image/*" setFieldValue={f.setFieldValue}
              className={cx(cls.fil, cls.logoFil)}  />
            { f.values.logo ?
              <img src={f.values.logo.url} className={cx(cls.img, cls.logoImg)} /> : null }
            
            {/* description */}
            <label className={cx(cls.lbl, cls.descriptionLbl)}>Description</label><br/>
            <Field type="text" name="description"
              component="textarea" rows="3"
              className={cx(cls.txa, cls.descriptionTxa)} />
            <br/>
            
            {/* market_value */}
            <label className={cx(cls.lbl, cls.marketValueLbl)}>Market value</label><br/>
            <Field type="number" name="market_value"
              className={cx(cls.txt, cls.marketValueTxt)} />
            <br/>
            
            {/* rival */}
            <div>
            <label className={cx(cls.lbl, cls.rivalLbl)}>Rival</label>
            <Field component="select" name="rival_id"
              className={cx(cls.ops, cls.rivalOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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
    const teamId = this.getTeamId();
    if (teamId != null) 
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
    const teamId = this.getTeamId();
    if (teamId == null) this.props.saveTeam(values, onSave)
    else this.props.setTeam(teamId, values, onSave);
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
    const teamId = this.getTeamId();
    this.props.getTeamDetails(teamId);
  }

  loadFkData() 
  {
    this.props.getTeamList({});
  }

  /* Args */

  getTeamId() 
  {
    return this.props.match.params.team_id;
  }
}

export default redux(TeamForm);
