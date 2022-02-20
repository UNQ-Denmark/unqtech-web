import { INavigation, INavigationData } from './layout.interface';
import React, { RefObject, useState } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import Burger from './burger';
import { TextLinkTextSmall } from '../shared/button';
import navigateTo from '../shared/pathHandler';
import styled from '@emotion/styled';
import useScrollPosition from '../shared/useScrollPosition';
import useWindowWidth from '../shared/useWindowSize';
import { theme } from '../shared/theme';
import { Dropdown, Menu } from 'antd';

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  z-index: 50;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  align-self: center;
  margin-right: 2rem;
  border-radius: 5px;
  cursor: pointer;
  object-fit: contain;

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

const DropDownBtn = styled.button`
  display: block;
  font-size: 14px;
  font-weight: 300;
  color: ${theme.colors.greyLight.grey55};
  background: transparent;
  margin-block-start: 1em;
  margin-block-end: 1em;
  align-self: center;
  padding: 0 1rem;
  border: none;
  &:hover {
    color: ${theme.colors.greyLight.grey5};
    background: transparent;
  }
`

const StyledDropDownLink = styled(TextLinkTextSmall)`
  cursor: pointer;
  transition: all 0.2s ease-in;
  background-image: none;
  background-position: center;
  font-size: 20px;
  padding-left: 1rem;

  &:hover {
    padding-right: 2.5rem;
    background-image: url('/icons/arrow-right-dark.svg');
    background-position: calc(100% - 1rem) center;
    background-repeat: no-repeat;
  }
`;

const LangLink = styled.p`
  font-size: 20px;
  transition: 0.2s ease-in;
  cursor: pointer;
  color: ${(props) =>
    props['aria-current'] ? props['color'] : theme.colors.greyLight.grey55};
  align-self: center;
  margin-bottom: 0;

  &:hover {
    color: white;
  }
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

export const ContactBtn = styled.button`
  height: 50px;
  border-radius: 25px;
  background: ${theme.colors.brandLight.secoundary};
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 0 2rem;
  align-self: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
  background-image: none;
  background-position: center;
  font-size: 20px;

  &:hover {
    padding-right: 2.5rem;
    background-image: url('/icons/arrow-right.svg');
    background-position: calc(100% - 1rem) center;
    background-repeat: no-repeat;
  }
`;

type Props = {
  locale: string;
  component: string;
  contactRef: RefObject<HTMLDivElement>
};

const HeaderComponent: React.FC<Props> = ({ locale, component, contactRef }: Props) => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const navigationDataNodes: INavigationData = navigationQuery();
  const navigationData: INavigation =
    navigationDataNodes.nodes.find((node) => node.node_locale == locale) ||
    navigationDataNodes.nodes[0];
  const width = useWindowWidth();
  const scrollPos = useScrollPosition();

  const executeScroll = () => contactRef.current && contactRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})    

  const menu = (
    <Menu >
      <Menu.Item key={1}>
        <StyledDropDownLink
          to={
            locale === 'da-DK' ? '/services/webshop' : '/en/services/e-commerce'
          }
        >
          {locale === 'da-DK' ? 'Webshop' : 'E-commerce'}
        </StyledDropDownLink>
      </Menu.Item>
      <Menu.Item key={2}>
        <StyledDropDownLink
          to={locale === 'da-DK' ? '/services/website' : '/en/services/website'}
        >
          {'Website'}
        </StyledDropDownLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        top: '0px',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 999,
        background:
          scrollPos > 1 || showBurger
            ? 'white'
            : 'transparent',
        transition: 'all .3s',
        borderBottom: '1px solid',
        borderColor:
          scrollPos > 1 || showBurger
            ? 'white'
            : 'transparent',
      }}
    >
      <Burger
        locale={locale}
        isOpen={showBurger}
        onClose={() => setShowBurger(!showBurger)}
        contactRef={contactRef}
      />
      <InnerHeader>
        <HeaderContent>
          <Logo
            src={
              scrollPos > 1 || showBurger
                ? '/logo/HQ2.png'
                : '/logo/HQ4.png'
            }
            onClick={() => navigate('/')}
            alt="UNQTech logo"
            width={1608}
            height={316}
          />
        </HeaderContent>
        <HeaderContent style={{ justifyContent: 'flex-end' }}>
          {width > 900 && (
            <>
              <Dropdown overlay={menu} placement="bottomCenter" arrow overlayStyle={{width: '200px'}}>
                <DropDownBtn>
                  {locale === 'da-DK' ? 'Webudvikling' : 'Web Development'}
                </DropDownBtn>
              </Dropdown>
              {/* <StyledTextLink
                to={locale === 'da-DK' ? '/services/hosting' : '/en/services/hosting'}
              >
                {'Hosting'}
              </StyledTextLink> */}
              <StyledTextLink to={locale === 'da-DK' ? '/blog' : '/en/blog'}>
                {'Blog'}
              </StyledTextLink>
              <StyledTextLink to={locale === 'da-DK' ? '/integrationer' : '/en/integrations'}>
              {locale === 'da-DK' ? 'Data integration' : 'Data Integrations'}
              </StyledTextLink>
          <ContactBtn onClick={executeScroll}>
            {locale === 'da-DK' ? 'Kontakt' : 'Contact'}
          </ContactBtn>

          <LangLink
            color={
              scrollPos > 1 || showBurger
                ? 'black'
                : 'white'
            }
            aria-current={locale === 'da-DK'}
            onClick={() => navigateTo('da-DK', component)}
          >
            DA
          </LangLink>
          <LangLink
            color={
              scrollPos > 1 || showBurger
                ? 'black'
                : 'white'
            }
            aria-current
            style={{ margin: '0 .2rem' }}
          >
            {' / '}
          </LangLink>
          <LangLink
            color={
              scrollPos > 1 || showBurger
                ? 'black'
                : 'white'
            }
            aria-current={locale === 'en-US'}
            onClick={() => navigateTo('en-US', component)}
          >
            EN
          </LangLink>
            </>
          )}

          <Icons
            src={showBurger ? '/icons/close.svg' : '/icons/menu.svg'}
            onClick={() => setShowBurger(!showBurger)}
            alt="Menu mansted wine"
            style={{ marginLeft: '2rem' }}
          />
        </HeaderContent>
      </InnerHeader>
    </div>
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
            gatsbyImageData(
              width: 100
              placeholder: DOMINANT_COLOR
              outputPixelDensities: 1.5
            )
          }
          daFlag {
            gatsbyImageData(
              width: 100
              placeholder: DOMINANT_COLOR
              outputPixelDensities: 1.5
            )
          }
        }
      }
    }
  `);
  return data.allContentfulNavigation;
};
