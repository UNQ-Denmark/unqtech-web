import FooterComponent from './footer';
import HeaderComponent from './navigation';
import { Layout } from 'antd';
import React from 'react';
import styled from '@emotion/styled';

type Props = {
  locale: string;
  componentName: string;
};

const SiteLayout: React.FC<Props> = (props) => {
  const StyledLayout = styled(Layout)`
    overflow-x: hidden;
    background: white;
    min-height: 100vh;
    min-width: 700px;
    @media (max-width: 700px) {
      min-width: 350px;
      max-width: 100vw;
    }
  `;

  const Wrapper = styled.div`
    width: 100%;
    margin-top: 80px;
  `;

  return (
    <StyledLayout>
      <HeaderComponent locale={props.locale} component={props.componentName} />
      <Wrapper>{props.children}</Wrapper>

      <FooterComponent locale={props.locale} />
    </StyledLayout>
  );
};

const StyledContent = styled(Layout.Content)`
  max-width: 1400px;
  min-width: 700px;
  width: 100%;
  margin: auto;
  z-index: 15;
  overflow-y: auto;

  @media (max-width: 700px) {
    min-width: unset;
    max-width: 100vw;
  }
`;

type PropsContent = {
  background?: string;
};

const SiteContent: React.FC<PropsContent> = (props) => {
  const Wrapper = styled.div`
    width: 100%;
    background: ${props.background ? props.background : 'transparent'};
  `;

  return <Wrapper><StyledContent>{props.children}</StyledContent></Wrapper>;
};

export { SiteLayout, SiteContent };
