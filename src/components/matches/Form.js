/*
__Seed builder__v1.0
  
  Fields:
    - id
    - date
    - type
    - local
    - visitor
    - scores
*/

import * as React from 'react';
import cx from 'classnames';

import _MatchForm from '_seed/components/matches/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/Form.module.css';
import { getDateInput } from 'util/FormatUtil';

class MatchForm extends _MatchForm
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
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.dateLbl)}>Date</label>
          <input type="datetime-local" className={cx(styles.dte, styles.dateDte)}  value={getDateInput(match.date)} onChange={this.onDateChange}></input>
          <br/>
          <label className={cx(styles.lbl, styles.typeLbl)}>Type</label>
          <select className={cx(styles.ops, styles.typeOps)} value={match.type} onChange={this.onTypeChange}>
            <option value='FRIENDSHIP'>Friendship</option>
            <option value='LEAGUE'>League</option>
            <option value='CUP'>Cup</option>
          </select>
          <br/>
          {
            this.state.filters.local_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.localLbl)}>Local</label>
              <select className={cx(styles.ops, styles.localOps)} value={match.local_id} onChange={this.onLocalChange}>
              { 
                teams.map(e => <option value={e.id}>{e.id}</option>)
              }
              </select>
              <br/>
              </div> : null
          }
          {
            this.state.filters.visitor_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.visitorLbl)}>Visitor</label>
              <select className={cx(styles.ops, styles.visitorOps)} value={match.visitor_id} onChange={this.onVisitorChange}>
              { 
                teams.map(e => <option value={e.id}>{e.id}</option>)
              }
              </select>
              <br/>
              </div> : null
          }

          {this.renderError()}

          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
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

}

export default MatchForm;
