import { SiteContent, SiteLayout } from '../components/layout/layout';

import { IHomePage } from '../components/index/index.interface';
import IndexPage from '../components/index/index-component';
import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';

type Props = {
  pageContext: PageContext;
//   data: {allContentfulHomePage: {nodes: IHomePage[]}}
};

const Index: React.FC<Props> = ({ pageContext }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo
        title="Webudvikling, design, integration"
        pathname={window.location.href}
        lang={pageContext.locale}
        // image={data.allContentfulHomePage.nodes[0].seoImage.file.url}
      />
    </SiteLayout>
  );
};
export default Index;

// export const LegalQuery = graphql`
// query LegalQuery($locale: String) {
//   allContentfulLegal(filter: { node_locale: { eq: $locale } }){
//     nodes {
//        title
//         keywords
//         seoImage {
//             file {
//                 url
//           }
//         }
//       }
//     }
//   }
// }
// `;