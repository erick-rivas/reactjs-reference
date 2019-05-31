/*
__Seed builder__v1.0
Fields:
    - id
    - name
    - logo_url
    - description
    - market_value
    - players
*/

import * as React from 'react';

import _TeamForm from '__seed__/components/teams/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/Form.module.css';
import { getDateInput } from 'util/Format';

class TeamForm extends _TeamForm
{
  render()
  {
    const { team = {} } = this.state;
    const teamId = this.getTeamId();

    if (team.id == null && teamId != null) return <Loading />
    return (
      <div className={styles.module}>
        <form onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          {'name: '} 
          <input type="text" className={styles.name} value={team.name} onChange={this.onNameChange}></input><br/>
          {'logo_url: '} 
          <input type="text" className={styles.logoUrl} value={team.logo_url} onChange={this.onLogoUrlChange}></input><br/>
          {'description: '} 
          <textarea type="text" className={styles.description} value={team.description} onChange={this.onDescriptionChange}></textarea><br/>
          {'market_value: '} 
          <input type="number" className={styles.marketValue} value={team.market_value} onChange={this.onMarketValueChange}></input><br/>
          <button type="submit" className={styles.submit}>Send</button>

        </form>
      </div>
    );
  }

  getTeamId() 
  {
    //Suggested id
    return this.props.teamId;
  } 

  onSave(res)
  {
  }

  onError(error)
  {
  }
}

export default TeamForm;
