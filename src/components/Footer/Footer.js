import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';

import { contactDetails } from '../../constants/constants';

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
} from './FooterStyles';

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
          <Slogan>Building things for the web.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Yash01607" target="_blank">
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/yash-agrawal-a150991a5/"
            target="_blank"
          >
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
