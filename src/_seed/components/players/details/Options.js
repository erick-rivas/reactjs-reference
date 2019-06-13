/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import PlayerForm from 'containers/players/Form';

class _PlayerDetailsOptions extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      player: {},
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
        <PlayerForm />
      </Modal>
    );
  }
}

export default _PlayerDetailsOptions;

