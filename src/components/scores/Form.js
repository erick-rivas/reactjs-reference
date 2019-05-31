/*
__Seed builder__v1.0
Fields:
    - id
    - min
    - player
    - match
*/

import * as React from 'react';

import _ScoreForm from '__seed__/components/scores/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/Form.module.css';
import { getDateInput } from 'util/Format';

class ScoreForm extends _ScoreForm
{
  render()
  {
    const { score = {} } = this.state;
    const scoreId = this.getScoreId();

    if (score.id == null && scoreId != null) return <Loading />
    return (
      <div className={styles.module}>
        <form onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          {'min: '} 
          <input type="number" className={styles.min} value={score.min} onChange={this.onMinChange}></input><br/>
          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    );
  }

  getScoreId() 
  {
    //Suggested id
    return this.props.scoreId;
  }
  getPlayerId()
  {
    //Suggested id
    return this.props.playerId;
  }
  getMatchId()
  {
    //Suggested id
    return this.props.matchId;
  } 

  onSave(res)
  {
  }

  onError(error)
  {
  }
}

export default ScoreForm;
