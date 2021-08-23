import { Col, Row } from 'antd'

import ArticleCard from './blogpost-card'
import { IBlogPostCard } from './blog.interface'
import React from 'react'

type Props = {
    articles: IBlogPostCard[]
}

const BlogComponent: React.FC<Props> = ({articles}: Props) => {

    return (
        <Row gutter={16} style={{width: '100%', height:"100%", marginBottom: '4rem'}}>
            {articles && articles.map((article, key) => {
                return(
                key === 0 ? 
                <Col span={24} key={key}>
                    <ArticleCard post={article} />
                </Col>
                :
                <Col xs={24} md={12} key={key}>
                    <ArticleCard post={article} />
                </Col>
            )}
        )}
        </Row>
    )
}

export default BlogComponent