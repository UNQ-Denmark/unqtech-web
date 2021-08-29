import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { ISection } from './contentful.interface'
import { theme } from './theme'
import { H3Bold, TextSmallMarkdown } from './typography'

const Container = styled.div`
    width: calc(100% - 4rem);
    margin: 2rem;
    height: 400px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    `

const Img = styled(GatsbyImage)`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    `

const FeatureBody = styled.div`
    margin-top: 2rem;
    width: 100%;
`

type Props = {
    feature: ISection
}

const FeatureItem: React.FC<Props> = ({feature}: Props) => {

    return (
        <Container>
            <Img image={feature.image.gatsbyImageData} alt={feature.title} />
            <FeatureBody>
                <H3Bold>{feature.title}</H3Bold>
                <TextSmallMarkdown><ReactMarkdown>{feature.description.description}</ReactMarkdown></TextSmallMarkdown>
            </FeatureBody>
        </Container>
    )
}

export default FeatureItem 