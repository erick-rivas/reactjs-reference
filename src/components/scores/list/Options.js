/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';

import _ScoreListOptions from '_seed/components/scores/list/Options';

import styles from 'util/css/scores/list/Options.module.css';

class ScoreListOptions extends _ScoreListOptions
{
  render()
  {
   
    const { url } = this.props.match;
    const { is_creating } = this.state;
    const createModal = is_creating ? this.renderModal() : null;

    return (
    <div className={styles.module}>
      <div className={styles.options}>
        <button className={cx(styles.btn, styles.create)} type="button" onClick={this.onCreateClick}>Create</button>
      </div>
      { createModal }
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }
}

export default ScoreListOptions;
