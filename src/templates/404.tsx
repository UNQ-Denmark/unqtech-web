import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { H2Head, TextBlueGradientBold, TextSmall } from '../components/shared/typography';
import { BtnBlackOut } from '../components/shared/button';

function NotFoundPage() {

  const scale = 1;
  const duration = "5s";
  const timingFunction = "ease";

  const dim = [1, 2, 3, 4]

    const hwlAnimation = (h: number, w: number, l: number) => keyframes`
      0% { transform: translate(${((w * -50) - 50) + ((l * 50) + 50)}%, ${((h * 50) - 200) + ((w * 25) - 25) + ((l * 25) + 25)}%); }
      14% { transform: translate(${((w * -50) - 50) + ((l * 100) - 50)}%, ${((h * 50) - 200) + ((w * 25) - 25) + ((l * 50) - 25)}%); }
      28% { transform: translate(${((w * -100) + 50) + ((l * 100) - 50)}%, ${((h * 50) - 200) + ((w * 50) - 75) + ((l * 50) - 25)}%); }
      43% { transform: translate(${((w * -100) - 100) + ((l * 100) + 100)}%, ${((h * 100) - 400) + ((w * 50) - 50) + ((l * 50) + 50)}%); }
      57% { transform: translate(${((w * -100) - 100) + ((l * 50) + 200)}%, ${((h * 100) - 400) + ((w * 50) - 50) + ((l * 25) + 100)}%); }
      71% { transform: translate(${((w * -50) - 200) + ((l * 50) + 200)}%, ${((h * 100) - 375) + ((w * 25) - 25) + ((l * 25) + 100)}%); }
      85% { transform: translate(${(w * -50) - 50}% + ${(l * 50) + 50}%, ${(h * 50) - 200}% + ${(w * 25) - 25}% + ${(l * 25) + 25}%); } 
      100% { transform: translate(${((w * -50) - 50) + ((l * 50) + 50)}%, ${((h * 50) - 200) + ((w * 25) - 25) + ((l * 25) + 25)}%); }
    `
  

  const Container = styled.div`
    position:relative;
    height:100px;
    width:86px;
    transform:scale(${scale * .5});
  `

  const TextContainer = styled.div`
    width: 800px;
    position:absolute;
    top: 40px;
    @media (max-width: 800px) {
      width: 100%;
        }
  `

 const Body = styled.div`
 display:flex;
 align-items: center;
  justify-content:center;
  height:100vh;
  width:100vw;
  margin:0;
  padding:0;
 `

const Cube = styled.div<{h: number, w: number, l: number}>`
  position:absolute;
  width:86px;
  height:100px;
  z-index: -${(props => props.h)}; 
  animation: ${(props => hwlAnimation(props.h, props.w, props.l))} infinite; 
  animation-timing-function: ${timingFunction}; 
  animation-duration: ${duration};
`

const Face = styled.div`
  height:50px;
  width:50px;
  position:absolute;
  transform-origin: 0 0;

  &.right {
    background:black;
    transform: rotate(-30deg) skewX(-30deg) translate(49px, 65px) scaleY(0.86);
  }

  &.left {
    background:blueviolet;
    transform: rotate(90deg) skewX(-30deg) scaleY(0.86) translate(25px, -50px);
  }

  &.top {
    background:orange;
    transform: rotate(210deg) skew(-30deg) translate(-75px, -22px) scaleY(0.86);
    z-index:2;
  }
`

  return (
    <Body>
      <TextContainer>
        <TextSmall>
        Oh no! It seems like you've wandered off the beaten path and landed in a digital wasteland. This page is about as useful as a snow plow in Miami. Don't worry though, you're not alone in your confusion. Even the best explorers get lost sometimes. You might want to retrace your steps and double-check your coordinates or try searching for what you're looking for. Or, you could just sit back, relax, and enjoy the fact that you've stumbled upon a page that's rarer than a unicorn sighting. Either way, we hope you have a great day, even if it didn't start out as planned!
        </TextSmall>
        <BtnBlackOut style={{width: 'fit-content'}} onClick={() => navigate('/en/')}>Take me Back</BtnBlackOut>
      </TextContainer>
    <Container>
    {dim.map((hdim, key) => (
      <div key={key}>
        {dim.map((wdim) => (
          dim.map((ldim, key) => (
            <Cube h={hdim} w={wdim} l={ldim} key={`${hdim}${wdim}${ldim}`}>
              <Face className="top"></Face>
              <Face className="left"></Face>
              <Face className="right"></Face>
            </Cube>
          ))
        ))}
      </div>))}
      
    </Container>
    </Body>
  );
}

export default NotFoundPage;
