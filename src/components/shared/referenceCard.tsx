import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

const Container = styled.div`
    height: 300px;
    position: relative;

    &.box {
  margin: auto;
  border: 2px solid transparent;
  text-align: center;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: 500ms ease;
}
&.box:before {
  position: absolute;
  width: 0;
  height: 2px;
  content: "";
  background: #fff;
  top: -2px;
  left: -2px;
  transition: 100ms width ease 300ms;
  -web-kit-transition: 100ms width ease 300ms;
}
&.box:after {
  position: absolute;
  width: 2px;
  height: 0;
  content: "";
  background: #fff;
  top: -2px;
  right: -2px;
  transition: 150ms height ease 200ms;
  -web-kit-transition: 150ms height ease 200ms;
}


&.box:hover {
  border-color: white;
  background: #0f2834;
}
&.box:hover:before {
  width: calc(100% + 2px);
  transition: 150ms width ease 0ms;
  -web-kit-transition: 150ms width ease 0ms;
}
&.box:hover:after {
  height: calc(100% + 2px);
  transition: 150ms height ease 150ms;
  -web-kit-transition: 150ms height ease 150ms;
}

&.box:hover &.box-inner:before {
  height: calc(100% + 2px);
  transition: 150ms height ease 300ms;
  -web-kit-transition: 150ms height ease 300ms;
}
`
const Header = styled.div`
    height: 50px;
    background-color: #000000a6;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid #ffffffa6;
    h4 {
        font-size: 34px;
        background-color: #0093E9;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        padding: 12px;
    }

`



const Img = styled(GatsbyImage)`
    height: 100%;
    width: 100%;
    `


type Props = {
    refImage: {gatsbyImageData: IGatsbyImageData, title: string, description: string}

}

const RefCard: React.FC<Props> = ({refImage}: Props) => {


    return (
        <Container className='box'>
            <Header><h4>{refImage.title}</h4></Header>
            <a href={refImage.description} target="_blank"><Img key={refImage.title} objectFit={'cover'} image={refImage.gatsbyImageData} alt={refImage.title} /></a>
        </Container>
    )
}

export default RefCard 