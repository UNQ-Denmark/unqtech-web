import { SiteContent, SiteLayout } from '../components/layout/layout';

import { IHomePage } from '../components/index/index.interface';
import IndexPage from '../components/index/index-component';
import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';

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
        title="Webudvikling, design, integration"
        pathname="/"
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
          gatsbyImageData(width: 400, placeholder: BLURRED)
        }
        headlineAnimationList
        headImage {
          gatsbyImageData(width: 1400, placeholder: BLURRED)
        }
    }
  }
}
`;