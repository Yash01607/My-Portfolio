import { motion } from "framer-motion";
import styled from "styled-components";

export const Img = styled.img`
  width: 100px;
`;

export const CertificateImg = styled.img`
  width: 90%;
  margin-top: 5%;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  align-items: start;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const CertificateCard = styled(motion.div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;
  padding-top: 10px;
`;

export const HeaderThree = styled.h3`
  font-weight: 300px;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const CardInfo = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const ViewCertificateButton = styled(motion.div)`
  width: 240px;
  height: 40px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% auto 5% auto;
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
    width: 90%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 5%;
  }
`;
