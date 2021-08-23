import { Col, Layout, Row } from 'antd';

import FooterComponent from './footer';
import HeaderComponent from './navigation';
import React from 'react';
import styled from '@emotion/styled';

const StyledContent = styled(Layout.Content)`
    max-width: 1400px;
    min-width: 700px;
    width: 100%;
    margin: auto;
    z-index: 15;

    @media (max-width: 700px) {
      min-width: unset;
      max-width: 100vw;
    }
  `;

type Props = {
  locale: string;
  componentName: string;
};

const SiteLayout: React.FC<Props> = props => {

  const StyledLayout = styled(Layout)`
  overflow-x: hidden;
  background: white;
    min-height: 100vh;
    min-width: 700px;
    font-size: 1rem;
    p {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      min-width: 350px;
      max-width: 100vw;
    }
  `;

return (
    <StyledLayout>
      <Layout.Header style={{height: "80px", padding: 0, lineHeight: 1.5715}}>
        <HeaderComponent component={props.componentName} transparentTop={props.componentName.toLowerCase() === "index"}  />  
      </Layout.Header>

      <Layout.Content>
        <Row justify="center">
          <Col xs={{span:24, offset:0}} xl={{span:24, offset:0}} xxl={{span: 24, offset: 0}}>
            {props.children}
          </Col>
        </Row>
      </Layout.Content>

    <FooterComponent></FooterComponent>
    </StyledLayout>
  );
};

export {SiteLayout, StyledContent}

