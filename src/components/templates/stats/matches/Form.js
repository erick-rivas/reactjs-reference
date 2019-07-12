/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import { getDateInput } from 'seed/util/FormatUtil';
import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/stats/matches/Form.module.css';

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
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
          <input name="date" type="datetime-local" className={cx(styles.dte, styles.dateDte)}  value={getDateInput(match.date)} onChange={this.onDateChange}></input>
          <br/>
          <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
          <select name="type" className={cx(styles.ops, styles.typeOps)} value={match.type} onChange={this.onTypeChange}>
            <option value='FRIENDSHIP'>Friendship</option>
            <option value='LEAGUE'>League</option>
            <option value='CUP'>Cup</option>
          </select>
          <br/>
          {filters.local_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.localLbl)}>Local</label>
              <select name="local" className={cx(styles.ops, styles.localOps)} value={match.local_id} onChange={this.onLocalChange}>
              { teams.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}
          {filters.visitor_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.visitorLbl)}>Visitor</label>
              <select name="visitor" className={cx(styles.ops, styles.visitorOps)} value={match.visitor_id} onChange={this.onVisitorChange}>
              { teams.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}

          {this.renderError()}

          <button type="submit" className={styles.submit}>Send</button>

        </form>
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
  * Business logic
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
    this.onDateChange = this.onDateChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLocalChange = this.onLocalChange.bind(this);
    this.onVisitorChange = this.onVisitorChange.bind(this);
  }

  componentDidMount()
  {
    this.loadData();
    this.loadFkData();
  }

  /* Props */

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

  fillData = e =>
  {
    let match = this.state.match ? this.state.match : {};
    match.date = match.date ? match.date : e.target.date.value;
    match.type = match.type ? match.type : e.target.type.value;
    match.local_id = match.local_id ? match.local_id : e.target.local.value;
    match.visitor_id = match.visitor_id ? match.visitor_id : e.target.visitor.value;

    this.setState({
      match: match
    });
  }

  saveData = e =>
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

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    this.fillData(e);
    this.saveData(e);
  }
  
  onDateChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.date = e.target.value;  
    this.setState({
      match: match
    });
  }
  
  onTypeChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.type = e.target.value;  
    this.setState({
      match: match
    });
  }
  
  onLocalChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.local_id = e.target.value;
    this.setState({
      match: match
    });
  }
  
  onVisitorChange(e)
  {
    let match = this.state.match ? this.state.match : {};
    match.visitor_id = e.target.value;
    this.setState({
      match: match
    });
  }
}

export default redux(MatchForm);
