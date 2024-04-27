import React, { useRef, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

import {
  List,
  ListItem,
  ListItemCompany,
  ListItemDesignation,
  ListContentDesc,
  ListItemDetails,
  ListContent,
  ListItemImage,
  ListItemCompanySpan,
  ListContentDescTech,
} from "./ExperienceStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  TechTag,
} from "../../styles/GlobalComponents";
import { Experience } from "../../constants/constants";

const ExperienceSection = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node?.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="experience">
      <SectionDivider />
      <SectionTitle main>Experience</SectionTitle>
      <List>
        {Experience.map((exp, i) => (
          <ListItem
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              transition: { duration: 0.5, delay: 0.3 * i },
              opacity: 1,
            }}
          >
            <ListItemImage
              src={exp.image}
              alt={exp.name}
              title={exp.name}
            />
            <ListItemDetails>
              <ListItemCompany>
                {exp.company}
                <ListItemCompanySpan>{exp.time}</ListItemCompanySpan>
              </ListItemCompany>
              <ListItemDesignation>
                {exp.designation}
                <ListItemCompanySpan>
                  <FaLocationDot style={{ marginRight: "5px" }} />
                  {exp.location}
                </ListItemCompanySpan>
              </ListItemDesignation>

              <ListContent>
                {exp.desc.map((desc, i) => (
                  <ListContentDesc key={i}>{desc}</ListContentDesc>
                ))}

                <ListContentDescTech
                  border_top
                  key={"TechSTack"}
                >
                  <TechTag
                    key={"yash"}
                    red
                  >
                    Tech Stack{" "}
                  </TechTag>
                  :
                  {exp.techStack.map((tech, j) => (
                    <TechTag key={j}>{tech} </TechTag>
                  ))}
                </ListContentDescTech>
              </ListContent>
            </ListItemDetails>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default ExperienceSection;
