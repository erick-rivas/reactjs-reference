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

import styles from 'resources/css/templates/stats/matches/Form.module.css';

class MatchForm extends React.Component
{
  render()
  {
    const { match = {} } = this.state;
    const { teams = [] } = this.props;
    const matchId = this.getMatchId();
    if (match.id == null && matchId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>
          Match
        </div>

        <div className={styles.form}>

          <Formik
            initialValues={match}
            validate={this.onValidate}
            onSubmit={this.onSubmit}>
          {({
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
            {/* date */}
            <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
            <Field name="date" type="datetime-local" className={cx(styles.dte, styles.dateDte)} />
            <br/>
            {/* type */}
            <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
            <Field component="select" name="type" className={cx(styles.ops, styles.typeOps)} >
              <option value='FRIENDSHIP'>Friendship</option>
              <option value='LEAGUE'>League</option>
              <option value='CUP'>Cup</option>
            </Field>
            <br/>
            {/* local */}
            <div>
            <label className={cx(styles.lbl, styles.localLbl)}>Local</label>
            <Field component="select" name="local_id" className={cx(styles.ops, styles.localOps)} >
              <option value="">Select an option</option>
              { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
            </Field>
            <br/>
            </div>
            {/* visitor */}
            <div>
            <label className={cx(styles.lbl, styles.visitorLbl)}>Visitor</label>
            <Field component="select" name="visitor_id" className={cx(styles.ops, styles.visitorOps)} >
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
      match: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount()
  {
    const matchId = this.getMatchId();
    if (matchId != null) 
      this.loadData();
    this.loadFkData();
  }

  /* Events */

  onSubmit(values, { setSubmitting })
  {
    let match = this.state.match ? this.state.match : {};
    
    match.date = values.date;
    match.type = values.type;

    match.local_id = values.local_id;
    match.visitor_id = values.visitor_id;
    
    this.saveData(match);
  }

  onValidate(){}

  /* Actions */

  loadData()
  {
    const matchId = this.getMatchId();
    const callback = res => 
    {
      const matchId = this.getMatchId();
      const match = DataUtil.getItem(this.props.matches, matchId);
      if (match.id != null)
        this.setState({
          match: Object.assign({}, this.state.match, match)
        })
    }
    this.props.getMatchDetails(matchId, callback);
    
  }

  loadFkData() 
  {
    this.props.getTeamList();
  }

  saveData(match)
  {
    const matchId = this.getMatchId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (matchId == null)
      this.props.saveMatch(match, onSave)
    else
      this.props.setMatch(matchId, match, onSave);
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

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }
}

export default redux(MatchForm);
