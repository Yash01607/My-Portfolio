import { motion } from "framer-motion";
import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  background: #0f1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(props) =>
    props.type === "institute"
      ? "rgba(255, 255, 255)"
      : "rgba(255, 255, 255, 0.5)"};
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

export const ListContentSkill = styled(motion.li)`
  margin: auto 15px auto 15px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 33%;
    margin: 0;
  }
`;

export const ListContentSkillImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const ListContentSkillName = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;
export const ListItem = styled(motion.li)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 30px auto;
  padding: 20px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
    flex-direction: column;
  }
`;
export const ListItemImage = styled.img`
  width: 100px;
  height: 100px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100px;
    height: 100px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 70px;
    height: 70px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
    margin: 10px auto;
  }
`;

export const ListItemDetails = styled.div`
  width: calc(100% - 120px);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: calc(100% - 120px);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(100% - 80px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100% - 35px);
  }
`;
export const ListItemCompany = styled(motion.h4)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ListItemDesignation = styled(motion.h4)`
  font-weight: 100;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
  }
`;

export const ListContent = styled(motion.ul)`
  width: 100%;
  list-style: circle inside;
`;

export const ListContentDesc = styled.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  margin-left: 20px;
  font-weight: 700;
  /* display: flex;
  flex-direction: row;
  align-items: center; */

  margin-top: ${(props) => (props.border_top ? "10px" : "")};

  padding: ${(props) =>
    props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};

  border-top: ${(props) =>
    props.border_top ? "2px solid rgba(255, 255, 255, 1)" : ""};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};
  }
`;
export const ListContentTech = styled.div``;
export const ListItemCompanySpan = styled.span`
  font-weight: 100;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  margin: auto 0 auto auto;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.02em;
    margin: 0;
  }
`;

export const ListContentDescTech = styled.li`
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  list-style-type: circle;
  margin-left: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  margin-top: ${(props) => (props.border_top ? "10px" : "")};

  padding: ${(props) =>
    props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};

  border-top: ${(props) =>
    props.border_top ? "2px solid rgba(255, 255, 255, 1)" : ""};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};
  }
`;
