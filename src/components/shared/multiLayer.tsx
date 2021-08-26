import styled from '@emotion/styled'

import React from 'react'
import { LayeredImage } from "react-layered-image";


const Container = styled.div`
    width: 650px;
    height: auto;
    position: relative;
    padding: 3rem;
`
const MultiLayerWoo: React.FC = () => {

    // const layers = [
    //     "/images/woocommerce-alene.png",
    //     "/images/Gruppe-1.png",
    //     "/images/Gruppe-2.png",
    //     "/images/Gruppe-3.png",
    //     "/images/Gruppe-4.png",
    //   ];

    const layers = [
        "https://cdn.discordapp.com/attachments/806183928410406972/880562740807204864/woocommerce-alene.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880563130680356905/gruppe-1.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880563385043931207/Gruppe2.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880564046879932416/Gruppe-3.png",
        "https://cdn.discordapp.com/attachments/806183928410406972/880564291915378698/Gruppe-4.png",
      ];


    return (
        <Container>
        {/* <div style={style}> */}
        <LayeredImage shadowOpacity={0} borderRadius={0} layers={layers} lightOpacity={0.2} style={{ width: '600px'}} />
      {/* </div> */}
      </Container>
    )
}

export default MultiLayerWoo