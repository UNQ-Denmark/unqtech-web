import { SiteContent, SiteLayout } from '../components/layout/layout';

import { IHomePage } from '../components/index/index.interface';
import IndexPage from '../components/index/index-component';
import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';
import { isBrowser } from '../components/shared/utils';

type Props = {
  pageContext: PageContext;
  data: {allContentfulHomePage: {nodes: IHomePage[]}}
};

const Index: React.FC<Props> = ({ pageContext, data }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title={data.allContentfulHomePage.nodes[0].title}
        pathname={isBrowser() ? window.location.href : '/'}
        lang={pageContext.locale}
        image={data.allContentfulHomePage.nodes[0].seoImage.file.url}
        keywords={data.allContentfulHomePage.nodes[0].keywords} 
        description={data.allContentfulHomePage.nodes[0].seoDescription.seoDescription}
      />
        <IndexPage locale={pageContext.locale} content={data.allContentfulHomePage.nodes[0]} />
    </SiteLayout>
  );
};
export default Index;

export const HomePageQuery = graphql`
query HomePageQuery($locale: String) {
  allContentfulHomePage(filter: { node_locale: { eq: $locale } }){
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
        headlineAnimationList
        refImage {
          title
          description
          gatsbyImageData(width: 400, quality: 100, placeholder: BLURRED, formats: WEBP)
        }
        sections {
        title
        image {
          title
          gatsbyImageData(width: 700, quality: 100, placeholder: BLURRED, formats: WEBP)
        }
        description {
          description
        }
      }
      features {
        title
        hasBtn
        btnLink
        image {
          title
          gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED, formats: WEBP)
        }
        description {
          description
        }
      }
    }
  }
}
`;