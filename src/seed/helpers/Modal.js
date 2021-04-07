/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import PropTypes from 'prop-types';
import cx from "classnames";
import ModalContainer from "@material-ui/core/Modal";
import css from "resources/css/seed/styles/Modal.module.css";

class Modal extends React.Component {

  render() {
    const { component, width=500, height=500, animation="zoomIn", overflow="auto"} = this.props;

    let children = []
    if (component != null)
      children = React.createElement(component, {
        ...this.props,
        closeModal: this.closeModal,
        onCompleted: this.closeModal,
        onError: this.closeModal,
      });
    else
      children = React.Children.map(this.props.children,
        (child) => {
          return React.cloneElement(child, {
            ...this.props,
            closeModal: this.closeModal,
            onCompleted: this.closeModal,
            onError: this.closeModal
          });
        });

    const containerStyle = {
      width: width + "px",
      marginLeft: -(width / 2) + "px",
      height: height + "px",
      marginTop: -(height / 2) + "px"
    };

    const contentStyle = {
      overflow: overflow
    };

    const closeStyle = {
      marginLeft: (width - 24) + "px"
    };

    return (
      <ModalContainer
        className={css.module}
        open={true}
        transitionDuration={0}
        closeModal={this.closeModal}>

        <div className={cx(css.container, "animate__animated", "animate__" + animation)}
          style={containerStyle}>
          <button
            className={css.close}
            style={closeStyle}
            onClick={this.closeModal}>
            <i className="fas fa-times"></i>
          </button>
          <div className={css.content} style={contentStyle}>
            {children}
          </div>
        </div>

      </ModalContainer>
    );
  }

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    const { onClose, history, match } = this.props;
    if (onClose == null){
      if(history != null){
        const { url } = match;
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        history.push(backUrl);
      }
    } else onClose(match);
  }
}

Modal.propTypes = {
  component: PropTypes.elementType,
  width: PropTypes.number, 
  height: PropTypes.number, 
  animation: PropTypes.string, 
  overflow: PropTypes.string,
  onClose: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  children: PropTypes.any
};

export default Modal;