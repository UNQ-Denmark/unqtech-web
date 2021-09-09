import { SiteContent, SiteLayout } from '../components/layout/layout';

import BlogPostComponent from '../components/blog/blogpost-component';
import { PageContext } from '../pageContext';
import React from 'react';
import Seo from '../components/shared/Seo';
import { graphql } from 'gatsby';
import { isBrowser } from '../components/shared/utils';
import { IBlogPost } from '../components/blog/blog.interface';

type Props = {
  data: { post: {nodes: IBlogPost[]}}
}

const BlogPost: React.FC<Props> = ({ data: { post } }: Props) => {

  return (
    <SiteLayout
      locale={'da-DK'}
      componentName={'blog'}
    >
      <Seo 
        title={post.nodes[0].title}
        pathname={isBrowser() ? window.location.href : '/'}
        image={post.nodes[0].image.file.url}
        keywords={post.nodes[0].tags}
        lang={post.nodes[0].lang}
        description={`${post.nodes[0].intro.intro}, ${post.nodes[0].type}, ${post.nodes[0].date}, ${post.nodes[0].author.name}`}
        date={post.nodes[0].date}
        topic={post.nodes[0].type}
        author={post.nodes[0].author.name}
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
    post: allContentfulBlogPost(filter: { slugName: { eq: $pagePath }, node_locale: {eq: "da-DK"} }) {
        nodes {
            title
            slugName
            type
            date(formatString: "MMMM DD, YYYY")
            intro {
              intro
            }
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
              file {
                url
              }
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
            tags
            lang
          }
    }
  }
`;