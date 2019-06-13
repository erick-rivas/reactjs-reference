/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import TeamForm from 'containers/teams/Form';

class _TeamListOptions extends React.Component
{
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
        <TeamForm />
      </Modal>
    );
  }
}
export default _TeamListOptions;

