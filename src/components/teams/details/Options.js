/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import { Link } from 'react-router-dom';

import _TeamDetailsOptions from '_seed/components/teams/details/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/details/Options.module.css';

class TeamDetailsOptions extends _TeamDetailsOptions
{
  render()
  {
    const { url } = this.props.match;
    const { is_editing } = this.state;
    const editModal = is_editing ? this.renderModal() : null;
    
    return (
    <div className={styles.module}>
      <Svg className={styles.back} 
        src={require('assets/icons/ic_arrow_back.svg')}
        onClick={this.onBackClick} />
       <div className={styles.options}>
        <button className={cx(styles.btn, styles.edit)} type="button" 
          onClick={this.onEditClick}>Edit</button>
         <button className={cx(styles.btn, styles.delete)} type="button" 
          onClick={this.onDeleteClick}>Delete</button>
      </div>
      {editModal}
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  onDelete(res)
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  onDeleteError(error)
  {
    //Suggested method
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }
}

export default TeamDetailsOptions;
