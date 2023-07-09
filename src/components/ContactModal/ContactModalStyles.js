import styled from 'styled-components';

export const DropDownContainerWrapper = styled.div`
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
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  animation: modal 0.2s linear;
`;

export const DropDownContainer = styled.div`
  opacity: 1;
  background-color: #fff;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 0;
  cursor: default;
  min-width: 500px;
  max-width: 2000px;
  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
  }
`;
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: 0.3s ease;
  padding: 12px 16px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;

export const DropDownIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownItemTitle = styled.h2`
  color: #0f1624;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
`;

export const DropDownItemDesc = styled.p`
  color: #0f1624;
  opacity: 0.5;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
`;
