/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

import Modal from 'components/helpers/Modal';
import MatchForm from 'containers/matches/Form';

class _MatchListOptions extends React.Component
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
        <MatchForm />
      </Modal>
    );
  }
}
export default _MatchListOptions;
