import styled from "styled-components";

export const ModalWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 99;
  width: 100%;  
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  animation: modal 0.2s linear;
`;

export const ModalContainer = styled.div`
  opacity: 1;
  cursor: default;
  width: 80%;
  max-width: 700px;

  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
  }
`;
