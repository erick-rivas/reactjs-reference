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

import styles from 'resources/css/templates/stats/matches/Form.module.css';

class MatchForm extends React.Component
{
  render()
  {
    const matchId = this.getMatchId();
    const match = Util.get(this.props.matches, matchId);
    const teams = Util.filter(this.props.teams, {})

    if (match.id == null && matchId != null) return <Loading />;
    
    return (
      <div className={styles.module}>

        <div className={styles.header}>Match</div>

        <div className={styles.form}>
          <Formik
            initialValues={match}
            onSubmit={this.onSubmit}>
          {({
            values, errors, setFieldValue, handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>
            {/* date */}
            <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
            <Field name="date" type="date" className={cx(styles.dte, styles.dateDte)} />
            <br/>
            {/* type */}
            <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
            <Field component="select" name="type" className={cx(styles.ops, styles.typeOps)} >
              <option value="">Select an option</option>
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

  onSubmit(values, { setSubmitting })
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
