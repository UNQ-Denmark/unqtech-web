import { Dropdown, Menu } from 'antd';
import { Link, navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';

import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';
import useWindowWidth from '../shared/useWindowSize';

/** @jsx jsx */


const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
`;

const StyledMenu = styled(Menu)`
  padding: 0.5rem;
  li {
    padding-bottom: 0.5rem;
  }
`;

const StyledMenuIcon = styled(MenuOutlined)`
  margin-top: auto;
  margin-bottom: auto;
  color: ${theme.colors.brandLight.extra};
  font-size: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  align-self: center;
  h1 {color: #fff;}
`;

const Logo = styled.img`
  align-self: center;
  height: 100%;
  margin-left: 0;
  filter: invert(0%);
  transition: all .4s ease-in-out;
`;

interface Props {
  component: string;
  transparentTop?: boolean;
}

const HeaderComponent: React.FC<Props> = ({
  component,
  transparentTop,
}: Props) => {
  const [scrollState, setScrollState] = useState(transparentTop ? 'top' : 'nonTop');
  let listener: any = null;

  const width = useWindowWidth();

  useEffect(() => {
    if (!transparentTop) {
      if (scrollState !== 'nonTop') {
        setScrollState('nonTop');
      }
      return
    }
    else {
      listener = document.addEventListener('scroll', e => {
        var scrolled = document?.scrollingElement?.scrollTop;
        if (scrolled && scrolled >= 80) {
          if (scrollState !== 'nonTop') {
            setScrollState('nonTop');
          }
        } else {
          if (scrollState !== 'top') {
            setScrollState('top');
          }
        }
      });
      return () => {
        document.removeEventListener('scroll', listener);
      };
    }
  }, [scrollState]);

  const StyledLink = styled(Link)`
    height: 100%;
    padding: 0 1rem;
    position: relative;
    top: 10px;
    color: #fff;
    height: 35px;
    top: 5px;
    text-transform: uppercase;
    align-self: center;
    &:hover {
      border-bottom: 3px solid white;
      color: #fff;
    }
  `;

const menu = (
  <StyledMenu mode="horizontal">
     <Menu.Item>
     <StyledLink to="/">
        {'Home'}
      </StyledLink>
    </Menu.Item>
    <Menu.Item>
      <StyledLink to="/services">Services</StyledLink>
    </Menu.Item>
    <Menu.Item>
      <StyledLink to="/om">Om</StyledLink>
    </Menu.Item>
    <Menu.Item>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </Menu.Item>
  </StyledMenu>
);

  return (
    <div
      style={{
        transition: 'background-color 0.5s',
        height: '80px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        boxShadow:
          scrollState && scrollState === 'top'
          ? 'none'
          : '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
        background:
          scrollState && scrollState === 'top'
            ? 'rgba(255, 255, 255, 0) '
            : '#274c77',
      }}
    >
      <InnerHeader>
        <HeaderContent
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer'}}
        >
          <Logo src="/logo.png" 
            style={{
              transform: scrollState && scrollState === 'top' ? `scale(${width > 700 ? '2.5' : '1.5'})` : 'scale(1)',
              position: scrollState && scrollState === 'top' ?'absolute' : 'absolute',
              top: scrollState && scrollState === 'top' ? 'calc(100vh / 4)' : '0',
              filter: scrollState && scrollState === 'top' ? 'invert(0%)' : 'invert(100%)',
              marginLeft: scrollState && scrollState === 'top' ? '15%' : 'initial' }}
              
              />
        </HeaderContent>
        {width > 700 && (
        <HeaderContent>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/om">Om</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </HeaderContent>
        )}
      {width < 700 && (
        <HeaderContent>
          <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={['click']}
              >
              <StyledMenuIcon />
            </Dropdown>
        </HeaderContent>
        )}
        </InnerHeader>
    </div>
  );
};

export default HeaderComponent;
