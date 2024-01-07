import React from 'react';
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiHiveBlockchain, SiCplusplus } from 'react-icons/si';
import { BsDatabaseFillGear } from 'react-icons/bs';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  List2,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListItem2,
} from './TechnologiesStyles';

import { technologiesText } from '../../constants/constants';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>{technologiesText}</SectionText>
    <List>
      <ListItem>
        <DiReact size={'4rem'} />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            ReactJS
            <br />
            NextJS
            <br />
            Redux
            <br />
            GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size={'4rem'} />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            NodeIS
            <br />
            ExpressJS
            <br />
            Django
            <br />
            FastAPI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsDatabaseFillGear size={'4rem'} />
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            MongoDB
            <br />
            MySQL
            <br />
            Firebase
            <br />
            Postgrese
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List2>
      <ListItem2>
        <SiHiveBlockchain size={'4rem'} />
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Solidity
            <br />
            Metamask
          </ListParagraph>
        </ListContainer>
      </ListItem2>
      <ListItem2>
        <SiCplusplus size={'4rem'} />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C/C++
            <br />
            JavaScript
            <br />
            Java
            <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem2>
    </List2>
  </Section>
);

export default Technologies;
