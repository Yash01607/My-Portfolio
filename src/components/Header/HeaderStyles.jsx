import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 40px;
  max-width: 100%;
`;

export const Div1Div3Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Div1 = styled.div`
  min-width: 160px;
`;
export const Div1Link = styled.a`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 20px;
`;
export const Div2 = styled.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`;
export const Div3 = styled.div`
  min-width: 160px;
  @media ${(props) => props.theme.breakpoints.lg} {
    min-width: 100px;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const SocialIcons = styled(motion.a)`
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const SocialIconImg = styled(motion.img)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 3rem;
    width: 3rem;
  }
`;

export const MenuIcon = styled.div`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
