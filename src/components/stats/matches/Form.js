/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { getDateInput } from 'seed/util/FormatUtil';
import Loading from 'components/helpers/Loading';

import Component from 'components/stats/matches/Form.link';

import styles from 'resources/css/stats/matches/Form.module.css';

class MatchForm extends Component
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
}

export default MatchForm;
