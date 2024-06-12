import React, { useState } from "react";
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
  SocialIconImg,
} from "./HeaderStyles";

import { socialIcons } from "../../constants/constants";

const Header = () => {
  const [openModal, setopenModal] = useState(false);

  const { width } = useWindowDimensions();

  const breakPoints = [0, 0, 395, 442, 487, 535, 579];

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
          {socialIcons.map(
            (icon, i) =>
              width > breakPoints[i] && (
                <SocialIcons
                  key={i}
                  href={icon.link}
                  target="_blank"
                  title={icon.name}
                >
                  <SocialIconImg
                    src={icon.image}
                    alt={icon.name}
                  ></SocialIconImg>
                </SocialIcons>
              )
          )}
        </Div3>
      </Div1Div3Wrapper>
      {width > 800 && (
        <Div2>
          <li key="Experience">
            <NavLink href="#experience">Experience</NavLink>
          </li>
          <li key="Projects">
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li key="Technologies">
            <NavLink href="#tech">Technologies</NavLink>
          </li>
          <li key="Education">
            <NavLink href="#education">Education</NavLink>
          </li>
          <li key="Certificates">
            <NavLink href="#certificates">Certificates</NavLink>
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
