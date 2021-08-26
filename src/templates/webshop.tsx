import {SiteContent, SiteLayout} from '../components/layout/layout';

import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { HeadContainer, HeadImage, HeadTextContainer, SectionCol, SectionImg, SectionRow, Waves } from '../components/shared/page-components';
import { Col } from 'antd';
import { H1, H1Bold, H2, H3, TextRegular } from '../components/shared/typography';
import { theme } from '../components/shared/theme';
import { graphql } from 'gatsby';
import { IWebShop } from '../components/shared/contentful.interface';
import ReactMarkdown from 'react-markdown';
import MultiLayerWoo from '../components/shared/multiLayer';

interface Props {
  pageContext: PageContext
  data: {
    allContentfulWebshopPage: { nodes: IWebShop[] };
  };
}

const WebshopPage: React.FC<Props> = ({ pageContext, data }: Props) => {
  const content = data.allContentfulWebshopPage.nodes[0]

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo title={content.title} image={content.seoImage.file.url} keywords={content.keywords} />
      <HeadContainer>
        <HeadImage image={content.headImage.gatsbyImageData} alt={content.title} />
        <HeadTextContainer>
          <H1Bold>{content.headline}</H1Bold>
          <H2>{content.subHeadline}</H2>
        </HeadTextContainer>
      <Waves viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
      </HeadContainer>
      <SiteContent background={'white'} >
        <SectionRow gutter={40} style={{paddingTop: '0'}}>
          <Col span={12}>
            <MultiLayerWoo  />
            {/* <SectionImg imgStyle={{objectFit:'contain'}} image={content.sections[0].image.gatsbyImageData} alt={content.sections[0].image.title} /> */}
          </Col>
          <SectionCol span={12}>
            <H3>{content.sections[0].title}</H3>
            <TextRegular><ReactMarkdown>{content.sections[0].description.description}</ReactMarkdown></TextRegular>
          </SectionCol>
        </SectionRow>
      </SiteContent>
      <SiteContent background={theme.colors.gradients.darkgreenBg} backgrondImg={theme.colors.gradients.darkgreen}>
        <SectionRow gutter={40}>
          <SectionCol span={12}>
            <H3 style={{color: 'white'}}>{content.sections[1].title}</H3>
            <TextRegular style={{color: 'white'}}><ReactMarkdown>{content.sections[1].description.description}</ReactMarkdown></TextRegular>
          </SectionCol>
          <Col span={12}>
            <SectionImg image={content.sections[1].image.gatsbyImageData} alt={content.sections[1].image.title} />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
        <SectionRow gutter={40}>
          <Col span={12}>
            <SectionImg imgStyle={{objectFit: 'contain'}} image={content.sections[2].image.gatsbyImageData} alt={content.sections[2].image.title} />
          </Col>
          <SectionCol span={12}>
            <H3>{content.sections[2].title}</H3>
            <TextRegular><ReactMarkdown>{content.sections[2].description.description}</ReactMarkdown></TextRegular>
          </SectionCol>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
       <H1>Features</H1>
      </SiteContent>
      <SiteContent background={theme.colors.gradients.darkblueBg} backgrondImg={theme.colors.gradients.darkblue}>
        <SectionRow gutter={40}>
          <Col span={12}>
            <SectionImg imgStyle={{objectFit: 'contain'}} image={content.security.image.gatsbyImageData} alt={content.security.image.title} />
          </Col>
          <SectionCol span={12}>
            <H3 style={{color: 'white'}}>{content.security.title}</H3>
            <TextRegular style={{color: 'white'}}><ReactMarkdown>{content.security.description.description}</ReactMarkdown></TextRegular>
          </SectionCol>
        </SectionRow>
      </SiteContent>
    </SiteLayout>
  );
};

export default WebshopPage

export const WebshopPageQuery = graphql`
query WebshopPageQuery($locale: String) {
  allContentfulWebshopPage(filter: { node_locale: { eq: $locale } }) {
    nodes {
      title
      headline
      subHeadline
      headImage {
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      keywords
      sections {
        title
        image {
          gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED)
        }
        description {
          description
        }
      }
      security {
        title
        image {
          gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED)
        }
        description {
          description
        }
      }
      seoImage {
        file {
          url
        }
      }
      seoDescription {
        seoDescription
      }
    }
  }
}
`;