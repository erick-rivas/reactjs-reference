/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import * as React from 'react';

class Modal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      open: false
    }
    this.onClose = this.onClose.bind(this);
  }

  onClose()
  {
    this.props.onClose(this.props.match);
  }
}

export default Modal;