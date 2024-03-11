import React from "react";
import { ModalWrapper, ModalContainer } from "./ModalStyles.js";

const Modal = (props) => {
  if (props.show == null) {
    return null;
  }
  return (
    <ModalWrapper onClick={() => props.onClose()}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {props.children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
