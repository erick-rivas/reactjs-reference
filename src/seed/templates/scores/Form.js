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

import c from 'resources/css/seed/templates/scores/Form.module.css';

class ScoreForm extends React.Component
{
  render()
  {
    const scoreId = this.getScoreId();
    const score = Util.get(this.props.scores, scoreId);
    const players = Util.filter(this.props.players, {})
    const matches = Util.filter(this.props.matches, {})

    if (score.id == null && scoreId != null) return <Loading />;
    
    return (
      <div className={c.module}>

        <div className={c.header}>Score</div>

        <div className={c.form}>

          <Formik
             initialValues={score}
             onSubmit={this.onSubmit}
             render={f => (

          <form onSubmit={f.handleSubmit}>
            
            {/* min */}
            <label className={cx(c.lbl, c.minLbl)}>Min</label><br/>
            <Field type="number" name="min"
              className={cx(c.txt, c.minTxt)} />
            <br/>
            
            {/* player */}
            <div>
            <label className={cx(c.lbl, c.playerLbl)}>Player</label>
            <Field component="select" name="player_id"
              className={cx(c.ops, c.playerOps)} >
              <option value="">Select an option</option>
              { players.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            
            {/* match */}
            <div>
            <label className={cx(c.lbl, c.matchLbl)}>Match</label>
            <Field component="select" name="match_id"
              className={cx(c.ops, c.matchOps)} >
              <option value="">Select an option</option>
              { matches.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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
    const scoreId = this.getScoreId();
    if (scoreId != null) 
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
    const scoreId = this.getScoreId();
    if (scoreId == null) this.props.saveScore(values, onSave)
    else this.props.setScore(scoreId, values, onSave);
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
    const scoreId = this.getScoreId();
    this.props.getScoreDetails(scoreId);
  }

  loadFkData() 
  {
    this.props.getPlayerList({});
    this.props.getMatchList({});
  }

  /* Args */

  getScoreId() 
  {
    return this.props.match.params.score_id;
  }
}

export default redux(ScoreForm);
