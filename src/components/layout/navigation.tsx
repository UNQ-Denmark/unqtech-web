import { INavigation, INavigationData } from './layout.interface';
import React, { useState } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import Burger from './burger';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TextLinkTextSmall } from '../shared/button';
import navigateTo from '../shared/pathHandler';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';
import useWindowWidth from '../shared/useWindowSize';

const HeaderContainer = styled.div`
  top: 0px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${theme.colors.bgLight.white};
  z-index: 999;
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 100%;
  background: ${theme.colors.bgLight.white};
  border-bottom: 1px solid ${theme.colors.greyLight.grey10};
`;

const HeaderContent = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  z-index: 50;
`;

const StyledLocaleImg = styled(GatsbyImage)`
  margin: auto;
  margin-right: 1.5rem;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 2rem;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  align-self: center;
  margin-right: 2rem;
  border-radius: 5px;
  background: white;
  cursor: pointer;

  @media (max-width: 695px) {
    width: 250px;
  }

  @media (max-width: 495px) {
    width: 150px;
  }
`;

const StyledTextLink = styled(TextLinkTextSmall)`
  align-self: center;
  padding: 0 1rem;
`;

const Icons = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.2);
  }
`;

type Props = {
  locale: string;
  component: string;
};

const HeaderComponent: React.FC<Props> = ({ locale, component }: Props) => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const navigationDataNodes: INavigationData = navigationQuery();
  console.log(navigationQuery())
  const navigationData: INavigation =
    navigationDataNodes.nodes.find((node) => node.node_locale == locale) ||
    navigationDataNodes.nodes[0];
  const width = useWindowWidth();

  return (
    <HeaderContainer>
      <Burger
        locale={locale}
        isOpen={showBurger}
        onClose={() => setShowBurger(!showBurger)}
      />
      <InnerHeader>
        <HeaderContent>
          <Logo
            src={'/logo/HQ2.png'}
            onClick={() => navigate('/')}
            alt="UNQTech logo"
            width={1608}
            height={316}
          />
          {width > 1200 && (
            <>
              <StyledTextLink to={locale === 'da-DK' ? '/' : '/en'}>
                {locale === 'da-DK' ? 'Forside' : 'Home'}
              </StyledTextLink>
              <StyledTextLink to={locale === 'da-DK' ? '/om' : '/en/about'}>
                {locale === 'da-DK' ? 'Om' : 'About'}
              </StyledTextLink>
              <StyledTextLink
                to={locale === 'da-DK' ? '/services' : '/en/services'}
              >
                {'Services'}
              </StyledTextLink>
              <StyledTextLink to={locale === 'da-DK' ? '/blog' : '/en/blog'}>
                {'Blog'}
              </StyledTextLink>
              <StyledTextLink
                to={locale === 'da-DK' ? '/kontakt' : '/en/contact'}
              >
                {locale === 'da-DK' ? 'Kontakt' : 'Contact'}
              </StyledTextLink>
            </>
          )}
        </HeaderContent>
        <HeaderContent style={{ justifyContent: 'flex-end' }}>
          <StyledLocaleImg
            image={
              locale != 'da-DK'
                ? navigationData.daFlag.gatsbyImageData
                : navigationData.enFlag.gatsbyImageData
            }
            alt={'locale selector'}
            onClick={() =>
              navigateTo(locale === 'da-DK' ? 'en-US' : 'da-DK', component)
            }
            imgStyle={{ objectFit: 'cover' }}
          />
          <Icons
            src={showBurger ? '/icons/close.svg' : '/icons/menu.svg'}
            onClick={() => setShowBurger(!showBurger)}
            alt="Menu mansted wine"
          />
        </HeaderContent>
      </InnerHeader>
    </HeaderContainer>
  );
};

export default HeaderComponent;

export const navigationQuery = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allContentfulNavigation {
        nodes {
          backgroundColor
          node_locale
          title
          logo {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
          enFlag {
            gatsbyImageData(width: 100, placeholder: DOMINANT_COLOR, outputPixelDensities: 1.5)
          }
          daFlag {
            gatsbyImageData(width: 100, placeholder: DOMINANT_COLOR, outputPixelDensities: 1.5)
          }
        }
      }
    }
  `);
  return data.allContentfulNavigation;
};
