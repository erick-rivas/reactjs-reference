/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Formik, Field } from 'formik';

import Loading from 'components/helpers/Loading';

import styles from 'resources/css/stats/matches/Form.module.css';

class MatchForm extends React.Component
{
  render()
  {
    const { match = {} } = this.state;
    const { teams = [] } = this.props;
    const { filters } = this.state;
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
            values,
            errors,
            handleSubmit
          }) => (

          <form onSubmit={handleSubmit}>

            {/* Suggested divs */}
            <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
            <Field name="date" type="datetime-local" className={cx(styles.dte, styles.dateDte)} />
            <br/>
            <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
            <Field component="select" name="type" className={cx(styles.ops, styles.typeOps)} >
              <option value='FRIENDSHIP'>Friendship</option>
              <option value='LEAGUE'>League</option>
              <option value='CUP'>Cup</option>
            </Field>
            <br/>
            {filters.local_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.localLbl)}>Local</label>
                <Field component="select" name="local_id" className={cx(styles.ops, styles.localOps)} >
                  { teams.map(e => <option value={e.id}>{e.id}</option>) }
                </Field>
                <br/>
                </div> : null}
            {filters.visitor_id == null ?
                <div>
                <label className={cx(styles.lbl, styles.visitorLbl)}>Visitor</label>
                <Field component="select" name="visitor_id" className={cx(styles.ops, styles.visitorOps)} >
                  { teams.map(e => <option value={e.id}>{e.id}</option>) }
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
      match: {
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(),
      },
      filters: {
        user_id: this.getUserId(),
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(), 
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
    let match = this.state.match ? this.state.match : {};
    match.date = values.date;
    match.type = values.type;
    match.local_id = values.local_id;
    match.visitor_id = values.visitor_id;

    this.setState({
      match: match
    });
    this.saveData();
  }

  onValidate()
  {
  }

  /* Actions */

  loadData = () =>
  {
    const { getMatchDetails } = this.props;
    const matchId = this.getMatchId();
    if (matchId != null) {
      const callback = res => 
      {
        const matchId = this.getMatchId();
        const match = DataUtil.getItem(this.props.matches, matchId);
        if (match.id != null)
          this.setState({
            match: Object.assign({}, this.state.match, match)
          })
      }
      getMatchDetails(matchId, callback);
    }
  }

  loadFkData = () => 
  {
    const { getTeamList } = this.props;
    getTeamList(this.state.filters);
  }

  saveData = () =>
  {
    const { saveMatch, setMatch } = this.props;
    const matchId = this.getMatchId();
    const onSave = res => 
    {
      if (res.ok) this.onSave(res.body);
      else this.onError(res.body)
    };
    if (matchId == null && saveMatch != null)
      saveMatch(this.state.match, onSave)
    if (matchId != null && setMatch != null)
      setMatch(matchId, this.state.match, onSave);
  }

  /* Args */

  getMatchId() 
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
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
  getLocalId()
  {
    const { local_id } = this.props.match.params;
    const { localId } = this.props;
    return local_id ? local_id : localId;
  }
  getVisitorId()
  {
    const { visitor_id } = this.props.match.params;
    const { visitorId } = this.props;
    return visitor_id ? visitor_id : visitorId;
  }
}

export default redux(MatchForm);
