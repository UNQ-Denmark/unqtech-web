import BlogPostComponent from '../components/blog/blogpost-component';
import React from 'react';
import { graphql } from 'gatsby';

const BlogPost: React.FC = ({ data: { post } }: any) => {

  return (
      <BlogPostComponent article={post.nodes[0]} />
  );
};
export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    post: allContentfulBlogPost(filter: { slugName: { eq: $slug } }) {
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
              instagram
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
            timeToRead
            type
          }
    }
  }
`;