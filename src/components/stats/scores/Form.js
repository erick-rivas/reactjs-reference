/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { getDateInput } from 'util/FormatUtil';
import Loading from 'components/helpers/Loading';

import Component from 'components/stats/scores/Form.link';

import styles from 'resources/css/stats/scores/Form.module.css';

class ScoreForm extends Component
{
  render()
  {
    const { score = {} } = this.state;
    const { players = [] } = this.props;
    const { matches = [] } = this.props;
    const { filters } = this.state;
    const scoreId = this.getScoreId();
    if (score.id == null && scoreId != null) return <Loading />;
    
    return (
    <div className={styles.module}>
      <div className={styles.header}>
        Score
      </div>

      <div className={styles.form}>
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.minLbl)}>Min</label><br/>
          <input type="number" name="min" className={cx(styles.txt, styles.minTxt)} value={score.min} onChange={this.onMinChange} required></input>
          <br/>
          {filters.player_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.playerLbl)}>Player</label>
              <select name="player" className={cx(styles.ops, styles.playerOps)} value={score.player_id} onChange={this.onPlayerChange}>
              { players.map(e => <option value={e.id}>{e.id}</option>) }
              </select>
              <br/>
              </div> : null}
          {filters.match_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.matchLbl)}>Match</label>
              <select name="match" className={cx(styles.ops, styles.matchOps)} value={score.match_id} onChange={this.onMatchChange}>
              { matches.map(e => <option value={e.id}>{e.id}</option>) }
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

export default ScoreForm;
