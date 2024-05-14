import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { FaGoogleDrive } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

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
            title="My GitHub"
          >
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/yash-agrawal-a150991a5/"
            target="_blank"
            title="My LinkedIn"
          >
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          {width > 395 && (
            <SocialIcons
              href="https://drive.google.com/file/d/1flHV8Mddl0l5abVKpav9pYQjvSqKK8Xz/view?usp=sharing"
              target="_blank"
              title="My Resume"
            >
              <FaGoogleDrive size={"3rem"} />
            </SocialIcons>
          )}
          {width > 442 && (
            <SocialIcons
              href="https://leetcode.com/u/Yash_01/"
              target="_blank"
              title="Leetcode"
            >
              <SiLeetcode size={"3rem"} />
            </SocialIcons>
          )}
          {width > 487 && (
            <SocialIcons
              href="https://www.hackerrank.com/profile/Yash_01"
              target="_blank"
              title="Hackerrank"
            >
              <FaHackerrank size={"3rem"} />
            </SocialIcons>
          )}
          {width > 535 && (
            <SocialIcons
              href="https://codeforces.com/profile/Yash_01"
              target="_blank"
              title="Codeforces"
            >
              <SiCodeforces size={"3rem"} />
            </SocialIcons>
          )}
          {width > 579 && (
            <SocialIcons
              href="https://www.codechef.com/users/yash3457"
              target="_blank"
              title="CodeChef"
            >
              <SiCodechef size={"3rem"} />
            </SocialIcons>
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
