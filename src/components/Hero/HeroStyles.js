import styled from "styled-components";
import { motion } from "framer-motion";

export const LeftSection = styled.div`
  width: 100%;
  padding-top: 60px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const TitleText = styled(motion.div)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${(props) => (props.main ? "0" : "3.6rem")};
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const TitleSpan = styled(motion.div)`
  margin: ${(props) =>
    props.right
      ? "auto auto auto 2rem"
      : props.left
      ? "auto 2rem auto auto"
      : "auto"};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: ${(props) =>
      props.right
        ? "auto auto auto 1.5rem"
        : props.left
        ? "auto 1.5rem auto auto"
        : "auto"};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: ${(props) =>
      props.right
        ? "auto auto auto 1rem"
        : props.left
        ? "auto 1rem auto auto"
        : "auto"};
  }
`;

export const GreetingText = styled(motion.p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${(props) => (props.main ? "0" : "3.6rem")};
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const GreetingTitle = styled(motion.h2)`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const IntroText = styled(motion.p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: ${(props) => (props.main ? "0" : "3.6rem")};
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const KnowMoreButton = styled(motion.div)`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export const SummaryModal = styled.div`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding: 3.6rem;
  border-radius: 1rem;
  animation: modal 0.2s linear;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
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
  font-weight: 700;
  margin: 10px 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};
  }
`;
