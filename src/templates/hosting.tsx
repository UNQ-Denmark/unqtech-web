import { SiteContent, SiteLayout } from '../components/layout/layout';

import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import {
  HeadContainer,
  HeadImage,
  HeadTextContainer,
  SectionCol,
  SectionImg,
  SectionRow,
  Waves,
} from '../components/shared/page-components';
import { Col } from 'antd';
import {
  H1Bold,
  H1Ultra,
  H2,
  H2Bold,
  H3,
  TextRegular,
  TextRegularMarkdown,
} from '../components/shared/typography';
import { theme } from '../components/shared/theme';
import { IHostingPage } from '../components/shared/contentful.interface';
import FeatureItem from '../components/shared/feature';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

interface Props {
  pageContext: PageContext;
  data: { allContentfulHostingPage: { nodes: IHostingPage[] } };
}

const HostingPage: React.FC<Props> = ({ pageContext, data }: Props) => {
  const content = data.allContentfulHostingPage.nodes[0];

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title={content.title}
        image={content.seoImage.file.url}
        keywords={content.keywords}
      />
      <HeadContainer>
        <HeadImage
          image={content.headImage.gatsbyImageData}
          alt={content.title}
        />
        <HeadTextContainer>
          <H1Bold>{content.headline}</H1Bold>
          <H2>{content.subHeadline}</H2>
        </HeadTextContainer>
        <Waves viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#fff' }}
          ></path>
        </Waves>
      </HeadContainer>
      <SiteContent background={'white'}>
        <SectionRow>
          <SectionCol xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }}>
            <H3>{content.sections[0].title}</H3>
            <TextRegularMarkdown>
              <ReactMarkdown>
                {content.sections[0].description.description}
              </ReactMarkdown>
            </TextRegularMarkdown>
          </SectionCol>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <SectionImg
              imgStyle={{ objectFit: 'contain' }}
              image={content.sections[0].image.gatsbyImageData}
              alt={content.sections[0].image.title}
            />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent
        background={theme.colors.gradients.darkblueBg}
        backgrondImg={theme.colors.gradients.darkblue}
      >
        <SectionRow>
          <SectionCol xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
            <H3 style={{ color: 'white' }}>{content.sections[1].title}</H3>
            <TextRegularMarkdown style={{ color: 'white' }}>
              <ReactMarkdown>
                {content.sections[1].description.description}
              </ReactMarkdown>
            </TextRegularMarkdown>
          </SectionCol>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
            <SectionImg
              image={content.sections[1].image.gatsbyImageData}
              alt={content.sections[1].image.title}
            />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
        <SectionRow>
          <SectionCol xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }}>
            <H3>{content.sections[2].title}</H3>
            <TextRegularMarkdown>
              <ReactMarkdown>
                {content.sections[2].description.description}
              </ReactMarkdown>
            </TextRegularMarkdown>
          </SectionCol>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <SectionImg
              imgStyle={{ objectFit: 'contain' }}
              image={content.sections[2].image.gatsbyImageData}
              alt={content.sections[2].image.title}
            />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
        <SectionRow>
          {content.features &&
            content.features.length > 0 &&
            content.features.map((f) => (
              <Col key={f.title} xs={24} sm={12} md={8}>
                <FeatureItem feature={f} />
              </Col>
            ))}
        </SectionRow>
      </SiteContent>
    </SiteLayout>
  );
};

export default HostingPage;

export const HostingPageQuery = graphql`
  query HostingPageQuery($locale: String) {
    allContentfulHostingPage(filter: { node_locale: { eq: $locale } }) {
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
            title
            gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED)
          }
          description {
            description
          }
        }
        features {
          title
          image {
            title
            gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED)
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
