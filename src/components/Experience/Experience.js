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
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 0.5, delay: 0.3 * i },
              opacity: 1,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" },
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
                  <ListContentDesc
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {desc}
                  </ListContentDesc>
                ))}
                <ListContentDesc
                  border_top
                  key={"TechSTack"}
                >
                  <strong>
                    Tech Stack:{" "}
                    {exp.techStack.map((tech, j) => (
                      <TechTag
                        key={j}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.5,
                            delay: j * 0.05 + i * 0.3,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {tech}{" "}
                      </TechTag>
                    ))}
                  </strong>
                </ListContentDesc>
              </ListContent>
            </ListItemDetails>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default ExperienceSection;
