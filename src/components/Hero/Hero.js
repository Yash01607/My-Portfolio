import React, { useState } from "react";

import { Section } from "../../styles/GlobalComponents";
import {
  LeftSection,
  TitleText,
  GreetingText,
  GreetingTitle,
  TitleSpan,
  IntroText,
  KnowMoreButton,
  SummaryModal,
  ListContent,
  ListContentDesc,
} from "./HeroStyles";
import {
  Titles,
  aboutMeText,
  heroSectionText,
} from "../../constants/constants";
import Modal from "../Modal/Modal";
// import OptimusPrime from '../OptimusPrime/OptimusPrime';

const Hero = () => {
  const [showSummary, setShowSummary] = useState(null);
  return (
    <>
      <Section
        row
        nopadding
      >
        <Modal
          onClose={() => {
            setShowSummary(null);
          }}
          show={showSummary}
        >
          <SummaryModal>
            <ListContent>
              {aboutMeText.map((text, i) => (
                <ListContentDesc key={i}>{text}</ListContentDesc>
              ))}
            </ListContent>
          </SummaryModal>
        </Modal>

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
            onClick={() => setShowSummary(true)}
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
};

export default Hero;
