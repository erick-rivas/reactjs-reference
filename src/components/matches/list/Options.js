/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and CRUD operations
    - Modify ALL components if required
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';

import _MatchListOptions from '_seed/components/matches/list/Options';

import styles from 'util/css/matches/list/Options.module.css';

class MatchListOptions extends _MatchListOptions
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

export default MatchListOptions;
