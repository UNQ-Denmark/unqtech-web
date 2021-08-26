import styled from "@emotion/styled";
import { Col, Row } from "antd";

export const HeadContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  margin-top: -80px;
  /* border-radius: 50% / 0 0 250px 250px; */
  overflow: hidden;
  background: black;
  z-index: 2;
  `;

export const HeadImage = styled.img`
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