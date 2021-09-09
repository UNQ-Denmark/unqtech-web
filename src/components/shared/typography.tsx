import styled from '@emotion/styled'
import { theme } from './theme'

export const H1Ultra = styled.h1`
    width: 100%;
    font-weight: 400;
    font-size: 96px;
    line-height: 116px;
    font-family: "Maax";
    margin-bottom: 1rem;

    @media(max-width: 760px) {
        font-size: 48px;
        line-height: 64px;
    }
`

export const H1Bold = styled.h1`
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    line-height: 64px;
    font-family: "Maax";

    @media(max-width: 760px) {
        font-size: 32px;
        line-height: 40px;
    }
`

export const H1 = styled.h1`
    width: 100%;
    font-size: 48px;
    font-weight: 300;
    line-height: 64px;
    font-family: "Maax";

    @media(max-width: 760px) {
        font-size: 32px;
        line-height: 40px;
    }
`

export const H2Bold = styled.h2`
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    font-family: "Maax";
`
export const H2 = styled.h2`
    width: 100%;
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    font-family: "Maax";
`

export const H3Bold = styled.h3`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    line-height: 32px;
    font-family: "Maax";
`

export const H3 = styled.h3`
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
    font-family: "Maax";
`

export const TextBlueGradientBold = styled.p`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    background: ${theme.colors.gradients.blueGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const TextRegularBold = styled.p`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
`

export const TextRegularBoldGrey = styled.p`
    color: ${theme.colors.greyLight.grey25};
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
`

export const TextRegular = styled.p`
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.colors.greyLight.grey55};
`

export const TextRegularMarkdown = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.colors.greyLight.grey55};
    text-align: justify;
    hyphens: auto;
`


export const TextBlack = styled(TextRegular)`
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    color: ${theme.colors.txtLight.black};
`

export const TextSmallBold = styled.p`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: ${theme.colors.txtLight.black};
`

export const TextSmall = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.colors.greyLight.grey55};
`
export const TextSmallMarkdown = styled.div`
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.colors.greyLight.grey55};
    text-align: justify;
    hyphens: auto;
`

export const TextXsmallBold = styled.p`
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
`

export const TextXsmall = styled.p`
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: ${theme.colors.greyLight.grey55};
 `

export const Text2xsmallBold = styled.p`
    font-size: 11px;
    font-weight: bold;
    line-height: 12px;
`

export const Text2xsmall = styled.p`
    font-size: 11px;
    font-weight: 300;
    line-height: 12px;
    color: ${theme.colors.greyLight.grey55};
`

export const TextError = styled.p`
    width: 100%;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    color: ${theme.colors.rainbowLight.red};
`
export const TextBold = styled.b`
    font-size: 14px;
    display: inline;
    font-weight: bold;
    line-height: 24px;
    color: ${theme.colors.txtLight.black};
`

export const TextItalic = styled.i`
    font-size: 14px;
    display: inline;
    font-style: italic;
    line-height: 24px;
    color: ${theme.colors.txtLight.black};
`