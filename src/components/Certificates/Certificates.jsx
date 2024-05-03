import React, { useState } from "react";

import {
  CertificateCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  TitleContent,
  Img,
  CertificateImg,
  ViewCertificateButton,
} from "./certificateStyles";

import AutoHorizontalScrollableText from "../AutoHorizontalScrollableText/AutoHorizontalScrollableText";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { certificates } from "../../constants/constants";
import Modal from "../Modal/Modal";

const Certificates = () => {
  const [showCertificate, setSetShowCertificate] = useState(null);
  const [link, setLink] = useState(null);

  return (
    <Section id={"certificates"}>
      <SectionDivider />
      <SectionTitle main>Certificates</SectionTitle>
      <Modal
        onClose={() => {
          setSetShowCertificate(null);
        }}
        show={showCertificate}
      >
        <CertificateImg
          src={showCertificate}
          alt={showCertificate}
          title={`Visit ${showCertificate}`}
        />

        <ViewCertificateButton
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          target="_blank"
          certificate={showCertificate}
        >
          View Certificate
        </ViewCertificateButton>
      </Modal>
      <GridContainer>
        {certificates.map((c, i) => {
          return (
            <CertificateCard
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: i * 0.05,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
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
