import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:425-737-0854">425-737-0854</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:spencerccarlson0@gmail.com">spencerccarlson0@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/anomic84">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/spencer-carlson-59054a259/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/spencercarlsonmusic/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
