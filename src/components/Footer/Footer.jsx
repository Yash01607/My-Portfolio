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
  SocialIconImg,
  SocialIconsContainer,
} from "./FooterStyles";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaGoogleDrive, FaHackerrank } from "react-icons/fa";

import { socialIcons } from "../../constants/constants";

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
          {socialIcons.map((icon, i) => (
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
          ))}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
