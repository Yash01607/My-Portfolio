import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import ContactModal from "../ContactModal/ContactModal";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Div1Link,
  Div1Div3Wrapper,
} from "./HeaderStyles";

const Header = () => {
  const [openModal, setopenModal] = useState(false);

  const { width } = useWindowDimensions();

  const modalOpenerHandler = () => {
    setopenModal(true);
  };
  return (
    <Container>
      <Div1Div3Wrapper>
        <Div1>
          <Div1Link href="/My-Portfolio/">
            <DiCssdeck size={"3rem"} />
            <Span>My Portfolio</Span>
          </Div1Link>
        </Div1>
        <Div3>
          <SocialIcons
            href="https://github.com/Yash01607"
            target="_blank"
          >
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/yash-agrawal-a150991a5/"
            target="_blank"
          >
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
        </Div3>
      </Div1Div3Wrapper>
      {width > 800 && (
        <Div2>
          <li key="Experience">
            <NavLink href="#projects">Experience</NavLink>
          </li>
          <li key="Projects">
            <NavLink href="#tech">Projects</NavLink>
          </li>
          <li key="Technologies">
            <NavLink href="#education">Technologies</NavLink>
          </li>
          <li key="Education">
            <NavLink href="#education">Education</NavLink>
          </li>
          <li key="Certificates">
            <NavLink href="#education">Certificates</NavLink>
          </li>
          <li key="Contact">
            <div>
              <NavLink onClick={modalOpenerHandler}>Contact</NavLink>
              <ContactModal
                onClose={() => {
                  setopenModal(false);
                }}
                show={openModal}
                setShow={setopenModal}
              />
            </div>
          </li>
        </Div2>
      )}
    </Container>
  );
};

export default Header;
