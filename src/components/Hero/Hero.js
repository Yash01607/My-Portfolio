import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { heroSectionText } from '../../constants/constants';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText main>Hi, I'm</SectionText>
      <SectionTitle center>
        Yash Agrawal
        <br />I build things for the web
      </SectionTitle>
      <SectionText>{heroSectionText}</SectionText>
      <Button
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/yash-agrawal-a150991a5/',
            '_blank',
            'noopener,noreferrer'
          )
        }
        target="_blank"
      >
        Know More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
