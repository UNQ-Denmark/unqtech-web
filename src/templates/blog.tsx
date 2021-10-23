import {
  IBlogPage,
  IBlogPostCard,
} from '../components/blog/blog.interface';
import React, { useState } from 'react';
import { SiteContent, SiteLayout } from '../components/layout/layout';

import BlogComponent from '../components/blog/blog-component';
import { PageContext } from '../pageContext';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';
import { theme } from '../components/shared/theme';
import {
  HeadContainer,
  HeadImage,
  Waves,
} from '../components/shared/page-components';
import { H1Ultra, H2 } from '../components/shared/typography';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import useWindowWidth from '../components/shared/useWindowSize';

const HeadTextContainer = styled.div`
  z-index: 5;
  position: absolute;
  top: 200px;
  max-width: 750px;
  padding: 2rem;
    line-break: auto;
    white-space: wrap;
    h1 {
      color: ${theme.colors.txtLight.white};
    }
    h2 {
        color: ${theme.colors.txtLight.white};
    }
    @media(max-width: 600px) {
     top: 100px;
    h1 {
      font-size: 24px;
      line-height: 30px;
    }
   h2 {
      font-size: 20px;
      line-height: 24px;
   }
  }
`;

type Props = {
  pageContext: PageContext;
  data: {
    allContentfulBlogPost: { nodes: IBlogPostCard[] };
    allContentfulBlogPage: { nodes: IBlogPage[] };
  };
};

const CasesPage: React.FC<Props> = ({ pageContext, data }: Props) => {
  const width = useWindowWidth()

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo title={data.allContentfulBlogPage.nodes[0].title} image={data.allContentfulBlogPage.nodes[0].seoImage.file.url} keywords={data.allContentfulBlogPage.nodes[0].keywords} />
      <HeadContainer>
        <HeadImage image={data.allContentfulBlogPage.nodes[0].seoImage.gatsbyImageData} alt={data.allContentfulBlogPage.nodes[0].title} />
        <HeadTextContainer>
          <H1Ultra>{data.allContentfulBlogPage.nodes[0].title}</H1Ultra>
          <H2>
            <ReactMarkdown>
              {data.allContentfulBlogPage.nodes[0].subHeading.subHeading}
            </ReactMarkdown>
          </H2>
        </HeadTextContainer>
        <Waves viewBox={width > 10 && width < 700 ? `0 0 ${width-200} 150` : "0 0 500 150"} preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
        {/* <HeadImage image={content.headImage.gatsbyImageData} alt={content.title} /> */}
      </HeadContainer>
      <SiteContent background={theme.colors.bgLight.grey}>
        <BlogComponent
          articles={data.allContentfulBlogPost.nodes}
          content={data.allContentfulBlogPage.nodes}
        />
      </SiteContent>
    </SiteLayout>
  );
};
export default CasesPage;

export const BlogQuery = graphql`
  query {
    allContentfulBlogPost(filter: {node_locale: {eq: "da-DK"} }) {
      nodes {
        slugName
        title
        image {
          gatsbyImageData(width: 400, placeholder: BLURRED)
        }
        date(formatString: "MMMM DD, YYYY")
        type
        intro {
          intro
        }
      }
    }
    allContentfulBlogPage {
      nodes {
        title
        keywords
        seoImage {
          gatsbyImageData(width: 1600, placeholder: BLURRED)
          file {
            url
          }
        }
        headline
        subHeading {
          subHeading
        }
      }
    }
  }
`;
