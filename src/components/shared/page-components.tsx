import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Col, Row } from "antd";
import {GatsbyImage} from "gatsby-plugin-image";
import { H2Bold } from "./typography";

export const SlideIn = keyframes`
    from {
        
        opacity: .25;
        line-height: 500px;
    }
    to {
        
        opacity: 1;
        line-height: 40px;
    }

`

export const HeadContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  margin-top: -80px;
  overflow: hidden;
  background: black;
  z-index: 2;
  `;

export const HeadImage = styled(GatsbyImage)`
  width: 100%;
  height: 90vh;
  position: fixed;
  z-index: 1;
  filter: brightness(75%);
  border-radius: 5px;
  overflow: hidden;
`;

export const Waves = styled.svg`
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  z-index: 10;
`

export const SectionRow = styled(Row)`
    width: 100%;
    padding: 5rem 0;
    @media(max-width: 760px) {
    padding-top: 0;
  }
`

export const SectionRowHosting = styled(Row)`
    width: 100%;
    padding: 2rem 0;
    @media(max-width: 760px) {
    padding-top: 0;
  }
`

export const SectionCol = styled(Col)`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  h3 {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
  }
  @media(max-width: 760px) {
    padding-top: 2rem;
  }
`

export const HeadTextContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 5;
  position: absolute;
  top: 200px;
  width: 100%;
  padding: 2rem;
    line-break: auto;
    white-space: wrap;
    h1 {
      color: white;
    }
   h2 {
     color: white;
     max-width: 700px;
     animation: ${SlideIn} 1s ease;
   }

   @media(max-width: 600px) {
     top: 100px;
    h1 {
      font-size: 35px;
      line-height: 40px;
    }
   h2 {
    font-size: 25px;
    line-height: 30px;
   }
  }
`;

export const SectionImg = styled(GatsbyImage)`
  height: 500px;
  max-width: 650px;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;

  @media(max-width: 768px) {
    padding: 1rem;
    border-radius: 0px;
    max-width: 770px;
  }
`

export const SectionHead = styled(H2Bold)`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`