/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and CRUD operations
    - Modify ALL components if required
*/

import * as React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';

import _TeamListOptions from '_seed/components/teams/list/Options';

import styles from 'util/css/teams/list/Options.module.css';

class TeamListOptions extends _TeamListOptions
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

export default TeamListOptions;
