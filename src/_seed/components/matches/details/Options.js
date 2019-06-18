/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import MatchForm from 'containers/matches/Form';

class _MatchDetailsOptions extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      match: {},
      is_editing: false
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }


  /* Events */

  onEditClick()
  {
    this.setState({
      is_editing: true
    })
  }

  onModalClose()
  {
    this.setState({
      is_editing: false
    })
  }


  /* Components */

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

export default _MatchDetailsOptions;

