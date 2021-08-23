import { Col, Divider, Row } from 'antd'
import { H1Bold, H2Bold } from '../shared/typography'

import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../shared/theme'

type Props = {
    isOpen: boolean
    onClose: () => void
    locale: string
}

const Burger: React.FC<Props> = (props: Props) => {
    const Container = styled.div`
        width: 100%;
        min-height: calc(100vh - 80px);

        top: 80px;
        position: absolute;
        z-index: 999;
        display: ${props.isOpen ? 'unset' : 'none'};
        background: ${theme.colors.bgLight.white};
        padding-top: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;

        @media (max-width: 700px) {
            h3 {
                font-size: 40px;
            }
        }
        @media (max-width: 500px) {
            h3 {
                font-size: 25px;
                line-height: 45px;
            }
        }
    `

    const StyledHead = styled.h3`
        width: 100%;
        display: inline-block;
        color: black;
        font-size: 48px;
        font-weight: bold;
        line-height: 64px;
        transition: .3s ease-in-out;
        cursor: pointer;
        text-decoration: underline transparent;

        &:hover {
            color: ${theme.colors.greyLight.grey5};
            text-decoration-color:  black;
        }
    `


    return (
        <Container>
           <>
            <Link to={props.locale === 'da-DK' ? '/' : '/en'} onClick={() => props.onClose()}><StyledHead>{props.locale === 'da-DK' ? 'Forside' : 'Home'}</StyledHead></Link>
            <Link to={props.locale === 'da-DK' ? '/om' : '/en/about'} onClick={() => props.onClose()}><StyledHead>{props.locale === 'da-DK' ? 'Om' : 'About'}</StyledHead></Link>
            <Link to={props.locale === 'da-DK' ? '/services' : '/en/services'} onClick={() => props.onClose()}><StyledHead>{'Services'}</StyledHead></Link>
            <Link to={props.locale === 'da-DK' ? '/blog' : '/en/blog'} onClick={() => props.onClose()}><StyledHead>Blog</StyledHead></Link>
            <Link to={props.locale === 'da-DK' ? '/kontakt' : '/en/contact'} onClick={() => props.onClose()}><StyledHead>{props.locale === 'da-DK' ? 'Kontakt' : 'Contact'}</StyledHead></Link>
            <Link to={props.locale === 'da-DK' ? '/faq' : '/en/faq'} onClick={() => props.onClose()}><StyledHead>{props.locale === 'da-DK' ? 'Faq' : 'Faq'}</StyledHead></Link>
            </>
        </Container>
    )
}

export default Burger