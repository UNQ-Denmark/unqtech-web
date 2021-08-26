import { Breadcrumb, Col, Row } from 'antd'
import { H1Bold, H1Ultra, H2, H3, H3Bold, TextRegular, TextRegularBold } from '../shared/typography'
import { IBlogPage, IBlogPostCard } from './blog.interface'

import BlogPostCard from './blogpost-card'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import { theme } from '../shared/theme'


const DividerContainer = styled(Row)`
    border-bottom: 1px solid black;
    margin: 1rem 0;
`

type Props = {
    articles: IBlogPostCard[]
    content: IBlogPage[]
}

const BlogComponent: React.FC<Props> = ({articles, content}: Props) => {

    return (
        <>
        <DividerContainer justify={'space-between'}>
            <Col>
                <TextRegularBold>{'BROWSE ALL'}</TextRegularBold>
            </Col>
            <Col>
                <TextRegular>Sort by: <strong>Date</strong></TextRegular>
            </Col>
        </DividerContainer>

        <Row gutter={16} style={{width: '100%', height:"100%", marginBottom: '4rem'}}>
            {articles && articles.map((article, key) => {
                return(
                <Col xs={24} sm={12} md={8} key={key}>
                    <BlogPostCard post={article} />
                </Col>
            )}
        )}
        </Row>
        </>
    )
}

export default BlogComponent