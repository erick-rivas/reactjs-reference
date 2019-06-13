/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import { Link } from 'react-router-dom';

import _ScoreDetailsOptions from '_seed/components/scores/details/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/scores/details/Options.module.css';

class ScoreDetailsOptions extends _ScoreDetailsOptions
{
  render()
  {
    const { url } = this.props.match;
    const { is_editing } = this.state;
    const editModal = is_editing ? this.renderModal() : null;
    
    return (
    <div className={styles.module}>
      <Svg className={styles.back} 
        src={require('util/assets/icons/ic_arrow_back.svg')}
        onClick={this.props.onBackClick} />
       <div className={styles.options}>
        <button className={styles.edit} type="button" onClick={this.onEditClick}>Edit</button>
      </div>
      {editModal}
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default ScoreDetailsOptions;
