import {SiteContent, SiteLayout} from '../components/layout/layout';

import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { HeadContainer, HeadImage, SectionCol, SectionRow, Waves } from '../components/shared/page-components';
import { Col } from 'antd';
import { H3, TextRegular } from '../components/shared/typography';
import { theme } from '../components/shared/theme';

interface Props {
  pageContext: PageContext
}

const WebSitePage: React.FC<Props> = ({ pageContext }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo title="Hosting, webhhoting, serverhosting"/>
      <HeadContainer>
        <HeadImage src='http://via.placeholder.com/1500x800'/>
      <Waves viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
        {/* <HeadImage image={content.headImage.gatsbyImageData} alt={content.title} /> */}
      </HeadContainer>
      <SiteContent background={'white'}>
        <SectionRow gutter={40}>
          <Col span={12}>
            <img src="http://via.placeholder.com/650x500" />
          </Col>
          <SectionCol span={12}>
            <H3>This is a statement</H3>
            <TextRegular>This is awesome</TextRegular>
          </SectionCol>
        </SectionRow>
      </SiteContent>
      <SiteContent background={theme.colors.gradients.darkgreyBg} backgrondImg={theme.colors.gradients.darkgrey}>
        <SectionRow gutter={40}>
          <SectionCol span={12}>
            <H3 style={{color: 'white'}}>This is a statement</H3>
            <TextRegular style={{color: 'white'}}>This is awesome</TextRegular>
          </SectionCol>
          <Col span={12}>
            <img src="http://via.placeholder.com/650x500" />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
        <SectionRow gutter={40}>
          <Col span={12}>
            <img src="http://via.placeholder.com/650x500" />
          </Col>
          <SectionCol span={12}>
            <H3>This is a statement</H3>
            <TextRegular>This is awesome</TextRegular>
          </SectionCol>
        </SectionRow>
      </SiteContent>
    </SiteLayout>
  );
};

export default WebSitePage