import React from "react";

import { Section } from "../../styles/GlobalComponents";
import {
  LeftSection,
  TitleText,
  GreetingText,
  GreetingTitle,
  TitleSpan,
  IntroText,
  KnowMoreButton,
} from "./HeroStyles";
import { Titles, heroSectionText } from "../../constants/constants";
// import OptimusPrime from '../OptimusPrime/OptimusPrime';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <GreetingText
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
          main
        >
          Hi, I'm
        </GreetingText>
        <GreetingTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          center
        >
          Yash Agrawal
        </GreetingTitle>
        <GreetingTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          center
        >
          I build things for the web
        </GreetingTitle>
        <TitleText>
          <TitleSpan
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
            key={Titles[0]}
            left
          >
            {Titles[0]}
          </TitleSpan>{" "}
          <TitleSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
            key={"|"}
          >
            |
          </TitleSpan>
          <TitleSpan
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
            right
            key={Titles[1]}
          >
            {Titles[1]}
          </TitleSpan>
        </TitleText>
        <IntroText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
        >
          {heroSectionText}
        </IntroText>
        <KnowMoreButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
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
        </KnowMoreButton>
      </LeftSection>
      {/* <RightSection>
        <OptimusPrime></OptimusPrime>
      </RightSection> */}
    </Section>
  </>
);

export default Hero;
