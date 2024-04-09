import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import ContactModal from "../ContactModal/ContactModal";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Sidebar from "../Sidebar/Sidebar";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const [openModal, setopenModal] = useState(false);

  const { width } = useWindowDimensions();

  const modalOpenerHandler = () => {
    setopenModal(true);
  };
  return (
    <Container>
      {width < 1000 && <Sidebar />}
      <Div1>
        <a
          href="/My-Portfolio/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size={"3rem"} />
          <Span>My Portfolio</Span>
        </a>
      </Div1>
      {width >= 1000 && (
        <Div2>
          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="#tech">Technologies</NavLink>
          </li>
          <li>
            <NavLink href="#education">Education</NavLink>
          </li>
          <li>
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
    </Container>
  );
};

export default Header;
