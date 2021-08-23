import { SiteContent, SiteLayout } from '../components/layout/layout';

import BlogPostComponent from '../components/blog/blogpost-component';
import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';

type Props = {
  pageContext: PageContext
  data: { post: {nodes: any}}
}

const BlogPost: React.FC<Props> = ({ data: { post }, pageContext }: Props) => {

  return (
    <SiteLayout
      locale={pageContext.locale}
      componentName={pageContext.componentName}
    >
      <Seo 
        title="UNQ Kontakt" 
      />
      <SiteContent>
      <BlogPostComponent article={post.nodes[0]} />
      </SiteContent>
      </SiteLayout>
  );
};
export default BlogPost;

export const query = graphql`
  query ($pagePath: String!) {
    post: allContentfulBlogPost(filter: { slugName: { eq: $pagePath } }) {
        nodes {
            slugName
            title
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
              }
            }
            image {
              gatsbyImageData(width: 1200, placeholder: BLURRED)
            }
            author {
              linkedIn
              name
              image {
                gatsbyImageData(width: 200, placeholder: BLURRED)
                title
              }
              description {
                description
              }
            }
            date(formatString: "MMMM DD, YYYY")
            type
          }
    }
  }
`;