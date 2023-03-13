import React from 'react';
import { DiFirebase, DiMysql, DiNodejs, DiNpm, DiReact, DiSass, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've aquired a familiar understanding of many technologies used in the world of web development</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph> Experience with <br />React, Next, and <br />Vite</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNpm size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph> Experience with <br />Node, MySql2, Sequelize, MongoDB, and Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size="3rem" />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph> Experience with <br />Tailwind, SCSS, and <br />Styled-Components</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
