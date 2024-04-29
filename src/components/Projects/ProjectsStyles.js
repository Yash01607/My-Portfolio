import styled from "styled-components";
import { motion } from "framer-motion";

export const Img = styled.img`
  width: 40%;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const GridContainer = styled.section`
  display: flex;
  flex-diection: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 20px;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 20px 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: ${(props) => (props.summary ? "flex-start" : "center")};
  align-items: center;
  margin: 30px auto 10px auto;
  margin: ${(props) =>
    props.summary ? "10px auto 10px auto" : "30px auto 10px auto"};
`;

export const TagSpan = styled.span`
  margin: 3px 2px 3px 2px;
`;

export const TagImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
`;

export const HoverList = styled(motion.ul)`
  width: 100%;
`;

export const HoverListItem = styled(motion.a)`
  display: flex;
  text-decoration: none;
  color: inherit;
  justify-content: center;
  width: 70%;
  text-align: center;
  background-color: #003366;
  margin: 2rem auto;
  padding: 1.5rem;
  align-items: center;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowSpan = styled(motion.span)`
  margin-left: 10px;
`;
export const SummaryModal = styled.div`
  max-width: 800px;
  padding: 3.6rem;
  border-radius: 1rem;
  animation: modal 0.2s linear;
  text-align: left;

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
  margin-left: 20px;
  font-weight: 700;

  margin-top: ${(props) => (props.border_top ? "10px" : "")};

  padding: ${(props) =>
    props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.border_top ? "10px 20px 5px 0" : "5px 20px 5px 0"};
  }
`;

export const SummaryHead = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
  }
`;

export const SummaryList = styled(motion.div)`
  padding: 15px 0px;
  border-top: ${(props) =>
    props.border_top ? "2px solid rgba(255, 255, 255, 1)" : ""};
`;

export const ProjectTitle = styled(motion.h1)`
  padding-bottom: 15px;
  margin: 0 0 0 0;
  margin-right: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
`;
