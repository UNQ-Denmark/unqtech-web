import { Col, Layout, Row } from 'antd';
import { TextSmallBold, TextXsmall, TextXsmallBold } from '../shared/typography';

import React, { RefObject } from 'react';
import navigateTo from '../shared/pathHandler';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';
import ContactForm from '../shared/contactForm';

const StyledFooter = styled(Layout.Footer)`
  background: ${theme.colors.greyLight.grey5};
  width: 100%;
  z-index: 6;
  padding-top: 3rem;

  @media(max-width: 760px) {
    padding: 3rem 1rem;
  };
`;

export const FooterIcon = styled.img`
  margin: 0 12px;
  cursor: pointer;
  filter: invert(55%) sepia(10%) saturate(23%) hue-rotate(202deg) brightness(92%) contrast(88%);
  transition: .3s ease-in-out;
  &:hover {
    filter: none;
  }
`

const InnerFooter = styled(Layout.Footer)`
  padding: 0 15px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: ${theme.colors.greyLight.grey5};

  @media(max-width: 760px) {
    padding: 0;
    margin: 0;
  };
`;

const TextLink = styled(TextXsmallBold)`
  cursor: pointer;
  font-weight: 300;
  color: #828283;
  &:hover {
    color: ${theme.colors.greyLight.grey15};
  }
`

type Props = {
  locale: string
  contactRef: RefObject<HTMLDivElement>
}

const FooterComponent: React.FC<Props> = ({locale, contactRef}: Props) => {
  return (
    <>
    <ContactForm contactRef={contactRef} locale={locale} />
    <StyledFooter style={{background: theme.colors.bgLight.grey}}>
      <InnerFooter style={{background: theme.colors.bgLight.grey }}>
      <Row gutter={24} style={{ marginBottom: '3rem', background: theme.colors.bgLight.grey, width: '100%' }} justify='center' >
        <Col xs={20} sm={12} md={5}>
          <TextSmallBold>SERVICES</TextSmallBold>
          <TextLink onClick={() => navigateTo(locale, 'webshop')}>{locale === 'da-DK' ? 'Webshop' : 'E-commerce'}</TextLink>
          <TextLink onClick={() => navigateTo(locale, 'website')}>{'Website'}</TextLink>
          <TextLink onClick={() => navigateTo(locale, 'hosting')}>{'Hosting'}</TextLink>


        </Col>
        <Col xs={20} sm={12} md={5}>
          <TextSmallBold>INFORMATION</TextSmallBold>
          <TextLink onClick={() => navigateTo(locale, 'blog')}>{'Blog'}</TextLink>
          <TextLink onClick={() => navigateTo(locale, 'legal')}>{locale === 'da-DK' ? 'Privatlivspolitik' : 'Privacy Policy'}</TextLink>
          

        </Col>
        <Col xs={20} sm={12} md={{span: 6, offset: 1}}>
          <TextSmallBold>{locale === 'da-DK' ? 'KONTAKT' : 'CONTACT'}</TextSmallBold>

          <TextXsmallBold>Adresse</TextXsmallBold>
          <TextXsmall>Marielundvej 18, 2730 Herlev</TextXsmall>
          <TextXsmall>Danmark</TextXsmall>
          <TextXsmall>CVR: 37701734</TextXsmall>


          <TextXsmallBold style={{marginTop: '1.5rem'}}>EMAIL</TextXsmallBold>
          <TextXsmall>support@unqtech.dk</TextXsmall>


          {/* <TextXsmallBold style={{marginTop: '1.5rem'}}>TELEFON</TextXsmallBold>
          <TextXsmall>+45 12341234</TextXsmall> */}

        </Col>
        <Col xs={20} sm={12} md={7}>
        
          <TextSmallBold>{locale === 'da-DK' ? 'SOCIALE MEDIA' : 'SOCIAL MEDIA'}</TextSmallBold>
          <FooterIcon src="/icons/linkedin.svg" onClick={() => window.open('https://www.linkedin.com/company/unqtech-aps')} />
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
