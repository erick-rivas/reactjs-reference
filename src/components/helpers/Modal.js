import * as React from 'react';
import cx from 'classnames';

import ModalContainer from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import classes from 'resources/css/helpers/Modal.module.css';

class Modal extends React.Component
{
  render() 
  {
    const children = React.Children.map(this.props.children,
      child =>
      {
        return React.cloneElement(child, {
          onClose: this.onClose,
          match: this.props.match
        });
      });

    const { width, height, animation = "zoomIn" } = this.props;

    const containerStyle = width && height ? {
      width: width + 'px',
      marginLeft: -(width / 2) + 'px',
      height: height + 'px',
      marginTop: -(height / 2) + 'px'
    } : {};

    const closeStyle = width && height ? {
      marginLeft: (width - 30) + "px"
    } : {};

    return (
      <ModalContainer
        className={classes.module}
        open={true}
        transitionDuration={0}
        onClose={this.onClose}>

        <div className={cx(classes.container,'animated',animation)} style={containerStyle}>

          <IconButton
            className={classes.close}
            style={closeStyle}
            onClick={this.onClose}>
            <CloseIcon />
          </IconButton>

          {children}

        </div>

      </ModalContainer>
    );
  }

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