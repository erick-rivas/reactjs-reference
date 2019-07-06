/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import * as React from 'react';
import cx from 'classnames';

import ModalContainer from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Component from 'components/helpers/Loading.link.js'

import styles from 'resources/css/helpers/Modal.module.css';

class Modal extends Component
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
        className={styles.module}
        open={true}
        transitionDuration={0}
        onClose={this.onClose}>

        <div className={cx(styles.container,'animated',animation)} style={containerStyle}>

          <IconButton
            className={styles.close}
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