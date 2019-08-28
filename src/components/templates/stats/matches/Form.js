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

import c from 'resources/css/templates/stats/matches/Form.module.css';

class MatchForm extends React.Component
{
  render()
  {
    const matchId = this.getMatchId();
    const match = Util.get(this.props.matches, matchId);
    const teams = Util.filter(this.props.teams, {})

    if (match.id == null && matchId != null) return <Loading />;
    
    return (
      <div className={c.module}>

        <div className={c.header}>Match</div>

        <div className={c.form}>

          <Formik
             initialValues={match}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            {/* date */}
            <label className={cx(c.lbl, c.dateLbl)}>Date</label>
            <Field name="date" type="date" className={cx(c.dte, c.dateDte)} />
            <br/>
            {/* type */}
            <label className={cx(c.lbl, c.typeLbl)}>Type</label>
            <Field component="select" name="type" className={cx(c.ops, c.typeOps)} >
              <option value="">Select an option</option>
              <option value='FRIENDSHIP'>Friendship</option>
              <option value='LEAGUE'>League</option>
              <option value='CUP'>Cup</option>
            </Field>
            <br/>
            {/* local */}
            <div>
            <label className={cx(c.lbl, c.localLbl)}>Local</label>
            <Field component="select" name="local_id" className={cx(c.ops, c.localOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {/* visitor */}
            <div>
            <label className={cx(c.lbl, c.visitorLbl)}>Visitor</label>
            <Field component="select" name="visitor_id" className={cx(c.ops, c.visitorOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {this.renderError()}
            <button type="submit" className={c.submit}>Send</button>
          </form>
          )}
          />
        </div>
      </div>
    );
  }

  renderError()
  {
    const { error } = this.state;
    return (error ? <div className={c.error}>{error}</div> : null);
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    const matchId = this.getMatchId();
    if (matchId != null) 
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
    const matchId = this.getMatchId();
    if (matchId == null) this.props.saveMatch(values, onSave)
    else this.props.setMatch(matchId, values, onSave);
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
    const matchId = this.getMatchId();
    this.props.getMatchDetails(matchId);
  }

  loadFkData() 
  {
    this.props.getTeamList({});
  }

  /* Args */

  getMatchId() 
  {
    return this.props.matchId ?
      this.props.matchId :
      this.props.match.params.match_id;
  }
}

export default redux(MatchForm);
