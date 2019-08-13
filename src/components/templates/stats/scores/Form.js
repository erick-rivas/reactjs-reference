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

import styles from 'resources/css/templates/stats/scores/Form.module.css';

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
      <div className={styles.module}>

        <div className={styles.header}>Score</div>

        <div className={styles.form}>
          <Formik
            initialValues={score}
            onSubmit={this.onSubmit}>
          {({
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
            {/* min */}
            <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
            <Field type="number" name="min" className={cx(styles.txt, styles.minTxt)} />
            <br/>
            {/* player */}
            <div>
            <label className={cx(styles.lbl, styles.playerLbl)}>Player</label>
            <Field component="select" name="player_id" className={cx(styles.ops, styles.playerOps)} >
              <option value="">Select an option</option>
              { players.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {/* match */}
            <div>
            <label className={cx(styles.lbl, styles.matchLbl)}>Match</label>
            <Field component="select" name="match_id" className={cx(styles.ops, styles.matchOps)} >
              <option value="">Select an option</option>
              { matches.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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

  onSubmit(values, { setSubmitting })
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
    return this.props.scoreId ?
      this.props.scoreId :
      this.props.match.params.score_id;
  }
}

export default redux(ScoreForm);
