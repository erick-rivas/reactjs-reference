/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux'
import { Link } from 'react-router-dom';

import Modal from 'components/helpers/Modal';
import MatchForm from 'components/templates/stats/matches/Form';

import styles from 'resources/css/templates/stats/matches/options/List.module.css';

class MatchListOptions extends React.Component
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      is_creating: false
    };
    this.onCreateClick = this.onCreateClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  /* Events */

  onCreateClick()
  {
    this.setState({
      is_creating: true
    });
  }

  onModalClose()
  {
    this.setState({
      is_creating: false
    });
  }

  /* Component */

  renderModal() 
  {
    return (
    <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <MatchForm />
      </Modal>
    );
  }
}

export default redux(MatchListOptions);
