import React, { useEffect } from "react";
import { ModalWrapper, ModalContainer } from "./ModalStyles.jsx";

const Modal = (props) => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.show]);

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
        exit={{ opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
