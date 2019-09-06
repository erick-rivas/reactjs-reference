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

import c from 'resources/css/seed/templates/teams/Form.module.css';

class TeamForm extends React.Component
{
  render()
  {
    const teamId = this.getTeamId();
    const team = Util.get(this.props.teams, teamId);
    const teams = Util.filter(this.props.teams, {})

    if (team.id == null && teamId != null) return <Loading />;
    
    return (
      <div className={c.module}>

        <div className={c.header}>Team</div>

        <div className={c.form}>

          <Formik
             initialValues={team}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            
            {/* name */}
            <label className={cx(c.lbl, c.nameLbl)}>Name</label><br/>
            <Field type="text" name="name"
              className={cx(c.txt, c.nameTxt)} />
            <br/>
            
            {/* logo */}
            <label className={cx(c.lbl, c.logoLbl)}>Logo</label><br/>
            <FileField name="logo"
              accept="image/*" setFieldValue={f.setFieldValue}
              className={cx(c.fil, c.logoFil)}  />
            { f.values.logo ?
              <img src={f.values.logo.url} className={cx(c.img, c.logoImg)} /> : null }
            
            {/* description */}
            <label className={cx(c.lbl, c.descriptionLbl)}>Description</label><br/>
            <Field type="text" name="description"
              component="textarea" rows="3"
              className={cx(c.txa, c.descriptionTxa)} />
            <br/>
            
            {/* market_value */}
            <label className={cx(c.lbl, c.marketValueLbl)}>Market value</label><br/>
            <Field type="number" name="market_value"
              className={cx(c.txt, c.marketValueTxt)} />
            <br/>
            
            {/* rival */}
            <div>
            <label className={cx(c.lbl, c.rivalLbl)}>Rival</label>
            <Field component="select" name="rival_id"
              className={cx(c.ops, c.rivalOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {this.state.error ?
              <div className={c.error}>{this.state.error}</div> : null}
            <button type="submit" className={c.submit}>Send</button>
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
