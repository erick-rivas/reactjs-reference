/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from 'prop-types';
import cx from "classnames";
import ModalContainer from "@material-ui/core/Modal";
import css from "styles/css/seed/styles/Modal.module.css";

class Modal extends React.Component {

  render() {
    const { component, width = 500, height = 500, animation = "none", overflow = "auto" } = this.props;

    const adjustedWidth = window.innerWidth && window.innerWidth - 47 < width ? window.innerWidth - 47 : width
    const adjustedHeight = window.innerHeight && window.innerHeight - 47 < height ? window.innerHeight - 47 : height

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
      width: adjustedWidth + "px",
      marginLeft: -(adjustedWidth / 2 + 3) + "px",
      height: adjustedHeight + "px",
      marginTop: -(adjustedHeight / 2 - 3) + "px"
    };

    const contentStyle = {
      overflow: overflow
    };

    const closeStyle = {
      marginLeft: (adjustedWidth - 10) + "px"
    };

    return (
      <ModalContainer
        className={cx(css.module, "seed__modal")}
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
    if (onClose == null) {
      if (history != null) {
        const { url } = match;
        const backUrl = url.substring(0, url.replace(/\/\s*$/, "").lastIndexOf("/"));
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