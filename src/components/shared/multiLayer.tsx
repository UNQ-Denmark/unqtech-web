import styled from '@emotion/styled'

import React from 'react'
import { LayeredImage } from "react-layered-image";
import useWindowWidth from './useWindowSize';


const Container = styled.div`
    width: 100%;
    position: relative;
    padding: 3rem;
`
const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MultiLayerWoo: React.FC = () => {
  const width = useWindowWidth();

    const layers = [
        "https://cdn.discordapp.com/attachments/832326372596121660/883636197119914034/woocommerce-alene.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880563130680356905/gruppe-1.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880563385043931207/Gruppe2.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880564046879932416/Gruppe-3.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880564291915378698/Gruppe-4.png",
        "https://cdn.discordapp.com/attachments/832326372596121660/882520344735383552/Woo.png"
      ];


    return (
        <Container>
        <InnerContainer >
        <LayeredImage alt="UNQTech Integrations" shadowOpacity={0} borderRadius={0} layers={layers} lightOpacity={0.2} style={{width: width > 760 ? '100%' : '100%', height: '500px'}} />
      </InnerContainer>
      </Container>
    )
}

export default MultiLayerWoo