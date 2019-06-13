/*
__Seed builder__v1.0
  
  Fields:
    - id
    - min
    - player
    - match
*/

import * as React from 'react';
import cx from 'classnames';

import _ScoreForm from '_seed/components/scores/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/Form.module.css';
import { getDateInput } from 'util/FormatUtil';

class ScoreForm extends _ScoreForm
{
  render()
  {
    const { score = {} } = this.state;
    const { players = [] } = this.props;
    const { matches = [] } = this.props;
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
          <input type="number" className={cx(styles.txt, styles.minTxt)} value={score.min} onChange={this.onMinChange}></input>
          <br/>
          {
            this.state.filters.player_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.playerLbl)}>Player</label>
              <select className={cx(styles.ops, styles.playerOps)} value={score.player_id} onChange={this.onPlayerChange}>
              { 
                players.map(e => <option value={e.id}>{e.id}</option>)
              }
              </select>
              <br/>
              </div> : null
          }
          {
            this.state.filters.match_id == null ?
              <div>
              <label className={cx(styles.lbl, styles.matchLbl)}>Match</label>
              <select className={cx(styles.ops, styles.matchOps)} value={score.match_id} onChange={this.onMatchChange}>
              { 
                matches.map(e => <option value={e.id}>{e.id}</option>)
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

export default ScoreForm;
