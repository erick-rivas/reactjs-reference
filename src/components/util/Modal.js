import React from 'react'

import ModalContainer from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import classes from 'styles/css/util-modal.module.css';

class Modal extends React.Component
{
  state = {
    open: false
  };

  handleClose = () =>
  {
    const { history } = this.props;
    history.goBack();
  };

  render() 
  {
    const { children } = this.props;

    return (
      <ModalContainer
        className={classes.module}
        open={true}
        onClose={this.handleClose}>

        <div className={classes.container + ' animated zoomIn'}>

          <IconButton
            className={classes.close}
            onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>

          {children}

        </div>

      </ModalContainer>
    );
  }
}

export default Modal;