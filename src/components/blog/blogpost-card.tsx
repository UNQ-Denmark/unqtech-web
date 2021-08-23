import { H3Bold, TextBlueGradientBold, TextSmall } from '../shared/typography';

import { Card } from 'antd';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IBlogPostCard } from './blog.interface';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';

const StyledCard = styled(Card)`
margin: 1rem;
`
const Body = styled.div`
  height: 200px;
`
const TextStyled = styled(TextSmall)`
    margin-bottom: 1rem;
    align-self: center;
    overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
type Props = {
  post: IBlogPostCard;
};

const BlogPostCard: React.FC<Props> = ({ post }: Props) => {
  return (
    <StyledCard
      hoverable
      onClick={() => navigate(`/news/${post.slugName.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}/`)}
      cover={
        <GatsbyImage
        style={{height: '250px', objectFit: 'cover'}}
          alt={post.title}
          image={post.image.gatsbyImageData}
        />
      }
    >
      <Body>
          <TextBlueGradientBold>{post.type}</TextBlueGradientBold>
          <H3Bold>{post.title}</H3Bold>
          <TextSmall>{`${post.date} - ${post.timeToRead}`}</TextSmall>

        <TextStyled style={{color: theme.colors.txtLight.black}}><ReactMarkdown>{post.intro.intro}</ReactMarkdown></TextStyled>
      </Body>
    </StyledCard>
  );
};

export default BlogPostCard