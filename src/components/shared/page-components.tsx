import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Col, Row } from "antd";
import {GatsbyImage} from "gatsby-plugin-image";

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
`;

export const SectionImg = styled(GatsbyImage)`
  height: 500px;
  width: 650px;
  border-radius: 5px;
`