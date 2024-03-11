import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, TitleText } from "./HeroStyles";
import { Titles, heroSectionText } from "../../constants/constants";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText main>Hi, I'm</SectionText>
      <SectionTitle center>
        Yash Agrawal
        <br />I build things for the web
      </SectionTitle>
      <TitleText>
        {Titles.map((title, i) =>
          i < Titles.length - 1 ? <span>{title} | </span> : <span>{title}</span>
        )}
      </TitleText>
      <SectionText>{heroSectionText}</SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://github.com/Yash01607",
            "_blank",
            "noopener,noreferrer"
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
