import { Col, Layout, Row } from 'antd';
import { TextSmallBold, TextXsmall, TextXsmallBold } from '../shared/typography';

import React from 'react';
import { navigate } from 'gatsby';
import navigateTo from '../shared/pathHandler';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';
import ContactForm from '../shared/contactForm';

const StyledFooter = styled(Layout.Footer)`
  background: ${theme.colors.greyLight.grey5};
  width: 100%;
  z-index: 6;
  padding-top: 3rem;
`;


const InnerFooter = styled(Layout.Footer)`
  padding: 0 15px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: ${theme.colors.greyLight.grey5};
`;

const TextLink = styled(TextXsmallBold)`
  cursor: pointer;
  &:hover {
    color: ${theme.colors.greyLight.grey15};
  }
`

type Props = {
  locale: string
}

const FooterComponent: React.FC<Props> = ({locale}: Props) => {
  return (
    <>
      <ContactForm locale={locale} />
    <StyledFooter style={{background: theme.colors.bgLight.grey}}>
      <InnerFooter style={{background: theme.colors.bgLight.grey }}>
      <Row gutter={24} style={{ marginBottom: '3rem', background: theme.colors.bgLight.grey, width: '100%' }} justify='center' >
        <Col xs={20} sm={12} md={5}>
          <TextSmallBold>OM UNQTech</TextSmallBold>
          <TextLink onClick={() => navigateTo(locale, 'about')}>Om UNQTech</TextLink>
          <TextLink onClick={() => navigateTo(locale, 'services')}>Services </TextLink>
          <TextLink onClick={() => navigateTo(locale, 'blog')}>Blog</TextLink>


        </Col>
        <Col xs={20} sm={12} md={5}>
          <TextSmallBold>HJÆLP</TextSmallBold>
          {/* <TextLink>My Account</TextLink> */}
          <TextLink onClick={() => navigateTo(locale, '/faq')}>Ofte stillede spørgsmål</TextLink>
          <TextLink onClick={() => navigateTo(locale, '/privatpolitik')}>Privat Politik</TextLink>
          

        </Col>
        <Col xs={20} sm={12} md={{span: 6, offset: 1}}>
          <TextSmallBold>KONTAKT</TextSmallBold>

          <TextXsmallBold>Adresse</TextXsmallBold>
          <TextXsmall>Marielundvej 18, 2730 Herlev</TextXsmall>
          <TextXsmall>Danmark</TextXsmall>
          <TextXsmall>CVR: 37701734</TextXsmall>


          <TextXsmallBold style={{marginTop: '1.5rem'}}>EMAIL</TextXsmallBold>
          <TextXsmall>	info@unqtech.dk</TextXsmall>


          <TextXsmallBold style={{marginTop: '1.5rem'}}>TELEFON</TextXsmallBold>
          <TextXsmall>+45 12341234</TextXsmall>

        </Col>
        <Col xs={20} sm={12} md={7}>
        
          <TextSmallBold>Sociale media</TextSmallBold>
        </Col>
      </Row>
      </InnerFooter>
    </StyledFooter>
    <StyledFooter>
      <InnerFooter style={{marginTop: 0}}>
        <Row justify="center">
          <TextSmallBold>{`© 2021 UNQTech ApS - All rights reserved`}</TextSmallBold>
        </Row>
      </InnerFooter>
    </StyledFooter>
    </>
  );
};

export default FooterComponent;
