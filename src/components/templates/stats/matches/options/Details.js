/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import { Link } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/templates/stats/matches/options/Details.link';

import styles from 'resources/css/templates/stats/matches/options/Details.module.css';

class MatchDetailsOptions extends Component
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

export default MatchDetailsOptions;