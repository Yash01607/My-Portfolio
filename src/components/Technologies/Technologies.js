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

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a diverse range of technologies in the world of web
      development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'4rem'} />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
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
            Experienced with
            <br />
            NodeIS
            <br />
            ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsDatabaseFillGear size={'4rem'} />
        <ListContainer>
          <ListTitle>DataBases</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            MongoDB
            <br />
            MySQL
            <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List2>
      <ListItem2>
        <SiHiveBlockchain size={'4rem'} />
        <ListContainer>
          <ListTitle>Web3 Technologies</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            Solidity
            <br />
            Metamask
            <br />
            Web3
          </ListParagraph>
        </ListContainer>
      </ListItem2>
      <ListItem2>
        <SiCplusplus size={'4rem'} />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            C/C++
            <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem2>
    </List2>
  </Section>
);

export default Technologies;
