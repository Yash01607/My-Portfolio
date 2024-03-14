import React from "react";
import { ModalWrapper, ModalContainer } from "./ModalStyles.js";

const Modal = (props) => {
  if (props.show == null) {
    return null;
  }
  return (
    <ModalWrapper onClick={() => props.onClose()}>
      <ModalContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0,
            ease: "easeInOut",
          },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
