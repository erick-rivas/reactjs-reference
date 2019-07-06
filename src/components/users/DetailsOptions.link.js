/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import UserForm from 'containers/users/Form';

class _UserDetailsOptions extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      user: {},
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
    const { deleteUser } = this.props;
    const userId = this.getUserId();
    const onDelete = res => 
    {
      if (res.ok) this.onDelete(res.body);
      else this.onDeleteError(res.body);
    };
    deleteUser(userId, onDelete);
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

  getUserId() 
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id ? user_id : userId;
  }

  /* Components */

  renderModal()
  {
    return (
    <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <UserForm />
      </Modal>
    );
  }
}

export default _UserDetailsOptions;
