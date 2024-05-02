import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItem,
  ListTitle,
  ListContentSkill,
  ListContentSkillName,
  ListContentSkillImage,
  ListContent,
} from "./TechnologiesStyles";
import { Skills } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a diverse range of technologies in the world of web
      development.
    </SectionText>
    <List>
      {Skills.map((skillGroup, i) => (
        <ListItem
          key={i}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <ListTitle
            initial={{ opacity: 0, x: -15 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0, ease: "easeInOut" },
            }}
          >
            {skillGroup.category}
          </ListTitle>
          <ListContent>
            {skillGroup.skills.map((skill, i) => (
              <ListContentSkill
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
                <ListContentSkillImage
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                <ListContentSkillName>{skill.name}</ListContentSkillName>
              </ListContentSkill>
            ))}
          </ListContent>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
