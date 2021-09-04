import styled from '@emotion/styled'
import { navigate } from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BtnBlue } from './button'
import { ISection } from './contentful.interface'
import { theme } from './theme'
import { H3Bold, TextSmallMarkdown } from './typography'

const Container = styled.div`
    width: calc(100% - 4rem);
    margin: 2rem;
    height: 480px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    position: relative;
    align-content: flex-start;
    `

const Img = styled(GatsbyImage)`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    filter: grayscale(100%);
    `

const FeatureBody = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const BtnContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 50%;
    left: 0;
    margin-left: 1rem;
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
            {feature.hasBtn && feature.btnLink && 
                <BtnContainer>
                    <BtnBlue onClick={() => navigate(feature.btnLink || '/')}>
                        Læs mere
                    </BtnBlue>
                </BtnContainer>
            }
        </Container>
    )
}

export default FeatureItem 