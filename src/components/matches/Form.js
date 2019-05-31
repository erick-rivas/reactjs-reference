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

import _MatchForm from '__seed__/components/matches/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/matches/Form.module.css';
import { getDateInput } from 'util/Format';

class MatchForm extends _MatchForm
{
  render()
  {
    const { match = {} } = this.state;
    const matchId = this.getMatchId();

    if (match.id == null && matchId != null) return <Loading />
    return (
      <div className={styles.module}>
        <form onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          {'date: '} 
          <input type="datetime-local" className={styles.date} value={getDateInput(match.date)} onChange={this.onDateChange}></input><br/>
          {'type: '} 
          <select className={styles.type} value={match.type} onChange={this.onTypeChange}>
            <option value='FRIENDSHIP'>Friendship</option>
            <option value='LEAGUE'>League</option>
            <option value='CUP'>Cup</option>
          </select><br/>
          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    );
  }

  getMatchId() 
  {
    //Suggested id
    return this.props.matchId;
  }
  getLocalId()
  {
    //Suggested id
    return this.props.localId;
  }
  getVisitorId()
  {
    //Suggested id
    return this.props.visitorId;
  } 

  onSave(res)
  {
  }

  onError(error)
  {
  }
}

export default MatchForm;
