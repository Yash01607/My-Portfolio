import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  GridContainer,
  HeaderThree,
  Hr,
  TagImg,
  TagList,
  TitleContent,
  HoverList,
  HoverListItem,
  ArrowSpan,
  CardInfo,
  SummaryModal,
  ListContent,
  ListContentDesc,
  SummaryList,
  ProjectTitle,
  Img,
  SummaryHead,
  TagSpan,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/ProjectConstants";
import { FaArrowRight } from "react-icons/fa";

import "./ProjectAnimation.css";
import Modal from "../Modal/Modal";

const Projects = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(null);
  return (
    <Section
      nopadding
      id={"projects"}
    >
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <Modal
        onClose={() => {
          setShowProjectDetails(null);
        }}
        show={showProjectDetails}
      >
        {showProjectDetails ? (
          <SummaryModal>
            <SummaryHead>
              <div>
                <ProjectTitle>{showProjectDetails.title}</ProjectTitle>

                <TagList summary>
                  <h3>Tech Stack:</h3>
                  {showProjectDetails.tags.map((t, i) => {
                    return (
                      <TagSpan>
                        {t}
                        {showProjectDetails.tags.length - 1 === i ? "." : ","}
                      </TagSpan>
                    );
                  })}
                </TagList>
              </div>
              <Img
                src={showProjectDetails.image}
                alt={showProjectDetails.title}
              ></Img>
            </SummaryHead>

            {showProjectDetails?.details?.map((detail, i) => (
              <SummaryList border_top>
                <h3>{detail.heading}</h3>
                <ListContent>
                  {detail.description.map((t, i) => (
                    <ListContentDesc key={i}>{t}</ListContentDesc>
                  ))}
                </ListContent>
              </SummaryList>
            ))}
          </SummaryModal>
        ) : (
          <></>
        )}
      </Modal>
      <GridContainer>
        {projects.map((p, i) => (
          <motion.div
            class="card"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 0.5 },
              opacity: 1,
            }}
          >
            <div class="wrapper">
              <TitleContent>
                <a
                  href={p.visit}
                  target="_blank"
                  rel="noreferrer"
                >
                  <HeaderThree title={"true"}>{p.title}</HeaderThree>
                </a>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">
                {p.description.substring(0, 150)}
              </CardInfo>
              <Hr />
              <TagList>
                {p.tagImgs.map((t, i) => {
                  return (
                    <TagImg
                      src={t}
                      alt={t}
                      key={i}
                    ></TagImg>
                  );
                })}
              </TagList>
            </div>
            {/* <div class="title">{p.title}</div> */}
            <div class="hover_list">
              <HoverList>
                <HoverListItem
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setShowProjectDetails(p);
                  }}
                >
                  View Details
                  <ArrowSpan>
                    <FaArrowRight />
                  </ArrowSpan>
                </HoverListItem>
                <HoverListItem
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  href={p.visit}
                  target="_blank"
                >
                  Visit Site
                  <ArrowSpan>
                    <FaArrowRight />
                  </ArrowSpan>
                </HoverListItem>
                <HoverListItem
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  href={p.source}
                  target="_blank"
                >
                  View Code
                  <ArrowSpan>
                    <FaArrowRight />
                  </ArrowSpan>
                </HoverListItem>
                {/* <HoverListItem
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Take Tour
                  <ArrowSpan>
                    <FaArrowRight />
                  </ArrowSpan>
                </HoverListItem> */}
              </HoverList>
            </div>
          </motion.div>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
