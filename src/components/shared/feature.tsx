import styled from '@emotion/styled'
import { navigate } from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BtnBlue } from './button'
import { ISection } from './contentful.interface'
import { theme } from './theme'
import { H3Bold, TextSmallMarkdown } from './typography'


const Img = styled(GatsbyImage)`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    `

const FeatureBody = styled.div`
    margin-top: 1rem;
    width: 100%;
`

const BtnContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 50%;
    margin: auto;
`

type Props = {
    feature: ISection
}

const FeatureItem: React.FC<Props> = ({feature}: Props) => {

    const Container = styled.div`
    width: calc(100% - 4rem);
    margin: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    position: relative;
    align-content: flex-start;
    `

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
                        Read more
                    </BtnBlue>
                </BtnContainer>
            }
        </Container>
    )
}

export default FeatureItem 