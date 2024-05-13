import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";

import { contactDetails } from "../../constants/constants";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaGoogleDrive, FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${contactDetails.phone.substring(1)}`}>
            {contactDetails.phone}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turning Digital Dreams into Reality</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
          <SocialIcons
            href="https://drive.google.com/file/d/10MfQfs0Y6RBucbhT6Fppg852d4cgA_i9/view"
            target="_blank"
            title="My Resume"
          >
            <FaGoogleDrive size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://leetcode.com/u/Yash_01/"
            target="_blank"
            title="Leetcode"
          >
            <SiLeetcode size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.hackerrank.com/profile/Yash_01"
            target="_blank"
            title="Hackerrank"
          >
            <FaHackerrank size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://codeforces.com/profile/Yash_01"
            target="_blank"
            title="Codeforces"
          >
            <SiCodeforces size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.codechef.com/users/yash3457"
            target="_blank"
            title="CodeChef"
          >
            <SiCodechef size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
