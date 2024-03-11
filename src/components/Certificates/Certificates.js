import React, { useState } from "react";

import {
  CertificateCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  TitleContent,
  Img,
  CertificateImg,
} from "./certificateStyles";

import AutoHorizontalScrollableText from "../AutoHorizontalScrollableText/AutoHorizontalScrollableText";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { certificates } from "../../constants/constants";
import Modal from "../Modal/Modal";
import Button from "../../styles/GlobalComponents/Button";

const Certificates = () => {
  const [showCertificate, setSetShowCertificate] = useState(null);
  const [link, setLink] = useState(null);

  return (
    <Section nopadding id={"projects"}>
      <SectionDivider />
      <SectionTitle main>Certificates</SectionTitle>
      <Modal
        onClose={() => {
          setSetShowCertificate(null);
        }}
        show={showCertificate}
      >
        <Button
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          target="_blank"
          certificate={showCertificate}
        >
          View Certificate
        </Button>
        <CertificateImg
          src={showCertificate}
          alt={showCertificate}
          title={`Visit ${showCertificate}`}
        />
      </Modal>
      <GridContainer>
        {certificates.map((c, i) => {
          return (
            <CertificateCard
              title={`View ${c.title} Certificate`}
              key={i}
              onClick={() => {
                setSetShowCertificate(c.image);
                setLink(c.link);
              }}
            >
              <Img src={c.logo} alt={c.title} />
              <CardInfo className="card-info">
                {" "}
                <TitleContent>
                  <AutoHorizontalScrollableText>
                    <HeaderThree>{c.title}</HeaderThree>
                  </AutoHorizontalScrollableText>
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
};

export default Certificates;
