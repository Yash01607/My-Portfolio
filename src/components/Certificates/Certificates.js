import React from "react";

import {
  CertificateCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  TitleContent,
  Img,
} from "./certificateStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { certificates } from "../../constants/constants";

const Certificates = () => (
  <Section nopadding id={"certificates"}>
    <SectionDivider />
    <SectionTitle main>Certificates</SectionTitle>
    <GridContainer>
      {certificates.map((c, i) => {
        return (
          <CertificateCard key={i}>
            <Img src={c.logo} alt={c.title} title={`Visit ${c.title}`} />
            <CardInfo className="card-info">
              {" "}
              <TitleContent>
                <a href={c.link} target="_blank" rel="noreferrer">
                  <HeaderThree>{c.title}</HeaderThree>
                </a>
              </TitleContent>
              {c.issuedBy}
              <br />
              {c.issuedOn}
            </CardInfo>
          </CertificateCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Certificates;
