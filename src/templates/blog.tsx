import { IBlogPage, IBlogPost, IBlogPostCard } from '../components/blog/blog.interface';
import React, { useState } from 'react';
import { SiteContent, SiteLayout } from '../components/layout/layout';

import BlogComponent from '../components/blog/blog-component';
import { PageContext } from '../pageContext';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';
import { theme } from '../components/shared/theme';

type Props = {
  pageContext: PageContext;
  data: { 
    allContentfulBlogPost: {nodes: IBlogPostCard[]}
    allContentfulBlogPage: { nodes: IBlogPage[]}
  }
}

const CasesPage: React.FC<Props> = ({ pageContext, data }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo 
        title="UNQ Kontakt" 
      />
      <SiteContent background={theme.colors.bgLight.grey}>
         <BlogComponent articles={data.allContentfulBlogPost.nodes} content={data.allContentfulBlogPage.nodes} />
      </SiteContent>
    </SiteLayout>
  );
};
export default CasesPage;

export const BlogQuery = graphql`
query {
  allContentfulBlogPost {
    nodes {
        slugName
        title
        image {
          gatsbyImageData(width: 400, placeholder: BLURRED)
        }
        date(formatString: "MMMM DD, YYYY")
        type
        intro { intro }
    }
  }
  allContentfulBlogPage {
    nodes {
        title
        keywords
        seoImage {
          gatsbyImageData(width: 400, placeholder: BLURRED)
        }
        headline
        subHeading {subHeading}
    }
  }
}
`;