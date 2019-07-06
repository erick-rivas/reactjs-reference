/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import { Link } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/players/DetailsOptions.link.js';

import styles from 'resources/css/players/DetailsOptions.module.css';

class PlayerDetailsOptions extends Component
{
  render()
  {
    const { url } = this.props.match;
    const { is_editing } = this.state;
    const editModal = is_editing ? this.renderModal() : null;
    
    return (
    <div className={styles.module}>
      <Svg className={styles.back} 
        src={require('resources/icons/ic_arrow_back.svg')}
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
}

export default PlayerDetailsOptions;
