import styled from "styled-components";

export const Div = styled.div`
   {
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.5s ease;
    overflow-x: ${(scrollable) => scrollable && "hidden"};
  }
`;
