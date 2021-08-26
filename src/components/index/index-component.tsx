import * as THREE from 'three';

import { H1, H1Ultra, H2 } from '../shared/typography';
import React, { useEffect, useRef, useState } from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { IHomePage } from './index.interface';
import { Link } from 'gatsby';
import { SiteContent } from '../layout/layout';
import Typed from 'typed.js';
// @ts-ignore
import WAVES from 'vanta/dist/vanta.waves.min.js';
import styled from '@emotion/styled';
import { theme } from '../shared/theme';




const HeadContainer = styled.div`
  width: 100%;
  height: calc(100vh + 250px);
  position: relative;
  margin-top: -80px;
  /* border-radius: 50% / 0 0 250px 250px; */
  overflow: hidden;
  background: black;
  `;

const HeadImage = styled(GatsbyImage)`
  width: 100%;
  height: 500px;
  position: absolute;
  z-index: 1;
  filter: brightness(75%);
  border-radius: 5px;
`;
const AnnimatedHead = styled.div`
  width: 100%;
  margin-top: 150px;
  height: 300px;
  position: absolute;
  z-index: 2;
  padding: 0 3rem;
`;

const Waves = styled.svg`
  position: absolute;
  bottom: 0;
  height: 300px;
  width: 100%;
`

const ReferenceContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: absolute;
bottom: 350px;
`

const RefLogo = styled.img`
  max-height: 50px;
  max-width: 250px;
  margin: 0 1rem;
  width: auto;
  height: auto;
  filter: grayscale(100%);
  transition: filter .2s ease-in;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);

  }
`

const StyledLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  background:
     linear-gradient(
       to bottom, #0797b1 0%,
       #0797b1 100%
     );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  text-decoration: none;
  transition: background-size .2s;

  &:hover {
    background-size: 4px 50px;
    color:white;
  }

`

type Props = {
  content: IHomePage;
  locale: string
};

const IndexPage: React.FC<Props> = ({ content, locale }: Props) => {
  const el = React.useRef<any>();
  const typed = React.useRef<any>();
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const headRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: headRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: '200.00',
          minWidth: '200.00',
          scale: '1.00',
          scaleMobile: '1.00',
          color: '#000000',
          shininess: '25.00',
          zoom: '1.12',
          waveSpeed: '1.05',
          waveHeight: '8.00',
          THREE: THREE,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  React.useEffect(() => {
    const options = {
      strings: content.headlineAnimationList,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const DesignLink = <StyledLink to={locale === 'da-DK' ? '/services' : '/en/services'}>{locale === 'da-DK' ? 'Designer' : 'Design'}</StyledLink>
  const DevelopLink = <StyledLink to={locale === 'da-DK' ? '/services' : '/en/services'}>{locale === 'da-DK' ? 'Udvikler' : 'Develope'}</StyledLink>
  const MaintainLink = <StyledLink to={locale === 'da-DK' ? '/services' : '/en/services'}>{locale === 'da-DK' ? 'Vedligeholder' : 'Maintain'}</StyledLink>
  const final = locale === 'da-DK' ? 'Websites og Webshops' : 'Websites and eCommerce stores'

  return (
    <div>
      <HeadContainer ref={headRef}>
      <Waves viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
        {/* <HeadImage image={content.headImage.gatsbyImageData} alt={content.title} /> */}
        <AnnimatedHead>
          <H1Ultra
            style={{
              textAlign: 'center',
              fontWeight: 300,
              color: theme.colors.txtLight.white,
            }}
          >
            <span
              style={{ whiteSpace: 'pre', width: 'fit-content' }}
              ref={el}
            />
          </H1Ultra>
          <H1 style={{color: 'white', maxWidth: '600px', marginTop: '80px', wordBreak: 'keep-all'}}>{locale === 'da-DK' ? 'Vi' : 'We'} {DesignLink}, {DevelopLink} { locale === 'da-DK' ? 'og' : 'and'} {MaintainLink} {final}</H1>
        </AnnimatedHead>
        <ReferenceContainer>
          <RefLogo src="/logo/ex/pct.png" onClick={() => window.open('https://privatcoronatest.dk/', '_blank')?.focus()} />
          <RefLogo src="/logo/ex/udespa.png" onClick={() => window.open('https://udespa.dk/', '_blank')?.focus()} />
          <RefLogo src="/logo/ex/richberry.png" onClick={() => window.open('https://richberry.ph/', '_blank')?.focus()} />
          <RefLogo src="/logo/ex/wp.png" onClick={() => window.open('https://wagyupusher.dk/', '_blank')?.focus()} />

        </ReferenceContainer>
      </HeadContainer>
      <SiteContent>
        
      </SiteContent>
    </div>
  );
};

export default IndexPage;
