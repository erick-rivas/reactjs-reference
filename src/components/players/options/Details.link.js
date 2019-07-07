/*
__Seed builder__v1.0
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
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  /* Props */

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

  /* Events */

  onEditClick()
  {
    this.setState({
      is_editing: true
    })
  }

  onDeleteClick()
  {
    const { deletePlayer } = this.props;
    const playerId = this.getPlayerId();
    const onDelete = res => 
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    deletePlayer(playerId, onDelete);
  }

  onModalClose()
  {
    this.setState({
      is_editing: false
    })
  }

  onBackClick()
  {
    const { url } = this.props.match
    const backUrl = url.substring(0, url.lastIndexOf('/'));
    this.props.history.push(backUrl);
  }

  /* Args */

  getPlayerId() 
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
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
