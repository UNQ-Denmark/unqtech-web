import styled from "@emotion/styled";
import { Row } from "antd";
import React from "react";
import { SiteContent } from "../layout/layout";
import { HeadTextContainer, Waves } from "../shared/page-components";
import { theme } from "../shared/theme";
import { H1Bold, H2, H3 } from "../shared/typography";
import useWindowWidth from "../shared/useWindowSize";


export const HeadContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  margin-top: -80px;
  overflow: hidden;
  background-image: ${theme.colors.gradients.lightGreenGradient};
  z-index: 2;
  `;

type Props = {
    locale: string

}

const IntegrationComponent: React.FC<Props> = ({locale}: Props) => {
    const width = useWindowWidth();
    return (
        <>
        <HeadContainer>
        <HeadTextContainer>
          <H1Bold>Data integration og visualisering</H1Bold>
          <H2>Få insigt i din foretning med data integrationer fra forskellige applikationer og visualiseringer i Power BI </H2>
        </HeadTextContainer>
        <Waves viewBox={width > 10 && width < 700 ? `0 0 ${width-200} 150` : "0 0 500 150"} preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
      </HeadContainer>
        <SiteContent>
            <Row justify="center" style={{paddingBottom: '3rem'}}>
            
                <H2>{locale === 'da-DK' ? 'Side under opbygning' : 'Site under construction'}</H2>
                <H3>{locale === 'da-DK' ? 'Mere information kommer snart!' : 'More info coming soon!'}</H3>
            </Row>

        </SiteContent>
        </>
    )
}

export default IntegrationComponent