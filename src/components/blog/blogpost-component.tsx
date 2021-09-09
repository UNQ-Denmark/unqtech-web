import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Breadcrumb, Col, Row } from 'antd';
import { H1Bold, H2, H3, TextBlueGradientBold, TextBold, TextItalic, TextRegular, TextRegularBold, TextSmall, TextSmallBold } from '../shared/typography';

import { GatsbyImage } from "gatsby-plugin-image";
import { IBlogPost } from './blog.interface';
import React from 'react';
import { SiteContent } from '../layout/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from '@emotion/styled';

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  max-height: 450px;
  margin: 2rem 0;
`;
const StyledContentImg = styled(GatsbyImage)`
  max-width: 100%;
  margin: 3rem 0;
  max-height: 400px;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const BlogPostContentContainer = styled.div`
  width: 90%;
  max-width: 800px;
`;

const AuthorLogo = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    margin: 1rem;
`

type Props = {
  article: IBlogPost;
};

const BlogPostComponent: React.FC<Props> = ({ article }: Props) => {
  const options = {
    renderText: (text: any) => {
      return text
        .split('\n')
        .reduce((children: any, textSegment: any, index: any) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => (
            <TextBold style={{ width: 'fit-content', display: 'inline' }}>
                {text}
            </TextBold>
        ),
      [MARKS.ITALIC]: (text: any) => (
        <TextItalic style={{ width: 'fit-content', fontStyle: 'italic' }}>
          {text}
        </TextItalic>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => <H2>{children}</H2>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <H3>{children}</H3>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <TextRegularBold style={{ width: '100%' }}>{children}</TextRegularBold>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <TextRegular>{children}</TextRegular>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <StyledContentImg
            style={{ margin: '2rem auto' }}
            image={node.data.target.gatsbyImageData}
            alt={article.title}
            imgStyle={{objectFit: 'scale-down', borderRadius: '5px'}}
          />
        );
      },
    },
  };
  return (
  <SiteContent>
        <Breadcrumb style={{padding: '1rem'}}>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/blog">Blog</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {article.title}
            </Breadcrumb.Item>
        </Breadcrumb>

        <Container>
            <TextBlueGradientBold style={{fontSize: '14px'}}>{article.type}</TextBlueGradientBold>
            <H1Bold style={{ width: '100%', textAlign: 'center' }}>
            {article.title}
            </H1Bold>
            <TextRegular style={{textAlign: 'center'}}>{`${article.date}`}</TextRegular>
            <StyledImg image={article.image.gatsbyImageData} alt={article.title} />
            <BlogPostContentContainer>
            {article && article.content && renderRichText(article.content, options)}
            </BlogPostContentContainer>
        </Container>
        <Row justify="center" style={{marginTop: '4rem', marginBottom: '4rem'}}>
            <Col span={24} style={{display: 'flex', justifyContent:'center'}}><AuthorLogo image={article.author.image.gatsbyImageData} alt={article.author.name}/></Col>
            <TextSmallBold style={{width: '100%', textAlign: 'center'}}>{article.author.name}</TextSmallBold>
            {article.author.description && <TextSmall style={{maxWidth: '480px', textAlign: 'center'}} >{article.author.description.description}</TextSmall>}
            {(article.author.linkedIn || article.author.instagram) &&
                <Col span={24} style={{display: 'flex', justifyContent:'center'}}>
                    {article.author.linkedIn && <img src="/icons/linkedin.svg" style={{margin: '0.5rem', cursor: 'pointer'}} onClick={() => window.open(article.author.linkedIn,'_blank')} />}
                    {article.author.instagram && <img src="/icons/instagram.svg" style={{margin: '0.5rem', cursor: 'pointer'}} onClick={() => window.open(article.author.instagram,'_blank')} />}
                </Col>
            }
        </Row>
    </SiteContent>)
};
export default BlogPostComponent;