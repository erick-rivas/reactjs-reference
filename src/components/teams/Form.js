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
import cx from 'classnames';

import _TeamForm from '_seed/components/teams/Form';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/Form.module.css';
import { getDateInput } from 'util/FormatUtil';

class TeamForm extends _TeamForm
{
  render()
  {
    const { team = {} } = this.state;
    const teamId = this.getTeamId();
    if (team.id == null && teamId != null) return <Loading />;
    
    return (
    <div className={styles.module}>
      <div className={styles.header}>
        Team
      </div>

      <div className={styles.form}>
        <form  onSubmit={this.onSubmit}>

          {/* Suggested divs */}
          <label className={cx(styles.lbl, styles.nameLbl)}>Name</label><br/>
          <input type="text" className={cx(styles.txt, styles.nameTxt)} value={team.name} onChange={this.onNameChange}></input>
          <br/>
          <label className={cx(styles.lbl, styles.logoUrlLbl)}>Logo url</label><br/>
          <input type="text" className={cx(styles.txt, styles.logoUrlTxt)} value={team.logo_url} onChange={this.onLogoUrlChange}></input>
          <br/>
          <label className={cx(styles.lbl, styles.descriptionLbl)}>Description</label><br/>
          <textarea type="text" rows="3" className={cx(styles.txa, styles.descriptionTxa)} value={team.description} onChange={this.onDescriptionChange}></textarea>
          <br/>
          <label className={cx(styles.lbl, styles.marketValueLbl)}>Market value</label><br/>
          <input type="number" className={cx(styles.txt, styles.marketValueTxt)} value={team.market_value} onChange={this.onMarketValueChange}></input>
          <br/>

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

export default TeamForm;
