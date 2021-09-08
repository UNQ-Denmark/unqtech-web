import { SiteContent, SiteLayout } from '../components/layout/layout';

import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import {
  HeadContainer,
  HeadImage,
  HeadTextContainer,
  SectionHead,
  SectionRowHosting,
  Waves,
} from '../components/shared/page-components';
import { Col } from 'antd';
import {
  H1Bold,
  H2,
  TextRegularMarkdown,
  TextXsmall,
} from '../components/shared/typography';
import { IHostingPage } from '../components/shared/contentful.interface';
import FeatureItem from '../components/shared/feature';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { isBrowser } from '../components/shared/utils';
import PriceCard from '../components/shared/price-card';

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
        pathname={isBrowser() ? window.location.href : '/'}
        lang={pageContext.locale}
        description={content.seoDescription.seoDescription}
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
        <SectionRowHosting>
          <SectionHead>{content.infrastructureHead}</SectionHead>
          <Col xs={{span: 24}} md={{span: 12}} style={{padding: '2rem'}}>
            <TextRegularMarkdown><ReactMarkdown>{content.firstCol.firstCol}</ReactMarkdown></TextRegularMarkdown>
          </Col>
          <Col xs={{span: 24}} md={{span: 12}} style={{padding: '2rem'}}>
            <TextRegularMarkdown><ReactMarkdown>{content.secoundCol.secoundCol}</ReactMarkdown></TextRegularMarkdown>
          </Col>
        </SectionRowHosting>
      </SiteContent>

      <SiteContent background={'white'}>
        <SectionRowHosting>
          <SectionHead>{content.skillsHead}</SectionHead>
          {content.features &&
            content.features.length > 0 &&
            content.features.map((f) => (
              <Col key={f.title} xs={24} sm={12} md={8}>
                <FeatureItem feature={f} />
              </Col>
            ))}
        </SectionRowHosting>
      </SiteContent>

      <SiteContent background={'white'}>
        <SectionRowHosting>
          <SectionHead>{content.techHead}</SectionHead>
          {content.technologies &&
            content.technologies.length > 0 &&
            content.technologies.map((tech) => (
              <Col key={tech.title} xs={24} sm={12} md={8}>
                {tech.title}
              </Col>
            ))}
        </SectionRowHosting>
      </SiteContent>

      <SiteContent background={'white'}>
        <SectionRowHosting>
          <SectionHead>{content.priceHead}</SectionHead>
          {content.priceCards &&
            content.priceCards.length > 0 &&
            content.priceCards.map((priceCard) => (
              <Col key={priceCard.title} xs={24} sm={12} md={8} style={{padding: '2rem'}}>
                <PriceCard priceCard={priceCard} />
              </Col>
            ))}
          <Col span={24} style={{ textAlign: 'center', marginTop: '1rem' }}>
            <TextXsmall>{content.vatText}</TextXsmall>
          </Col>
        </SectionRowHosting>

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
        keywords
        seoImage {
          file {
            url
          }
        }
        seoDescription {
          seoDescription
        }
        headline
        subHeadline
        headImage {
          gatsbyImageData(width: 1920, placeholder: BLURRED)
        }
        infrastructureHead
        firstCol { firstCol }
        secoundCol { secoundCol }
        skillsHead
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
        techHead
        technologies {
          title
          image {
            title
            gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED)
          }
          description {
            description
          }
        }
        priceHead
        priceCards {
          title
          price
          currency
          description {
            description
          }
          btnText
          features
          bestValue
        }
        vatText
      }
    }
  }
`;
