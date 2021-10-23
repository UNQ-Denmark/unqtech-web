import * as THREE from 'three';

import { H1, H1Ultra, H3, TextRegularMarkdown } from '../shared/typography';
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
import { SectionCol, SectionImg, SectionRow } from '../shared/page-components';
import ReactMarkdown from 'react-markdown';
import { Col } from 'antd';
import FeatureItem from '../shared/feature';
import useWindowWidth from '../shared/useWindowSize';




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
flex-wrap: wrap;
justify-content: center;
position: absolute;
bottom: 350px;
`

const RefLogo = styled(GatsbyImage)`
  max-height: 50px;
  max-width: 200px;
  margin: 0 1rem;
  width: auto;
  height: auto;
  filter: grayscale(100%);
  transition: filter .2s ease-in;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
  }

  @media(max-width: 760px) {
    margin: 1rem;
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
  const width = useWindowWidth();

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

  return (
    <div>
      <HeadContainer ref={headRef}>
      <Waves viewBox={width > 10 && width < 700 ? `0 0 ${width-200} 150` : "0 0 500 150"} preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
        <AnnimatedHead>
        <H1Ultra style={{textAlign: 'center', color: theme.colors.txtLight.white}}>UNQTech</H1Ultra>
          <H1
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
          </H1>
        </AnnimatedHead>
        <ReferenceContainer>
          {content.refImage.length > 0 && content.refImage.map((img, key )=> (
            <RefLogo key={key} objectFit={'contain'} image={img.gatsbyImageData} alt={img.title} onClick={() => window.open(img.description, '_blank')?.focus()} />
          ))}
        </ReferenceContainer>
      </HeadContainer>
      <SiteContent background={'white'}>
        <SectionRow style={{paddingTop: '0'}} justify="center">
          <SectionCol xs={{span: 24, order: 2, offset: 0}} md={{span: 10, order: 2, offset: 1}}>
            <H3>{content.sections[0].title}</H3>
            <TextRegularMarkdown><ReactMarkdown>{content.sections[0].description.description}</ReactMarkdown></TextRegularMarkdown>
          </SectionCol>
          <Col xs={{span: 18, order: 1}} md={{span: 10, order: 1}}>
            <SectionImg imgStyle={{objectFit: 'contain'}} image={content.sections[0].image.gatsbyImageData} alt={content.sections[0].image.title} />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={theme.colors.gradients.darkblueBg} backgrondImg={theme.colors.gradients.darkblue}>
        <SectionRow>
          <SectionCol xs={{span: 24, order: 2}} md={{span: 12, order: 1}}>
            <H3 style={{color: 'white'}}>{content.sections[1].title}</H3>
            <TextRegularMarkdown style={{color: 'white'}}><ReactMarkdown>{content.sections[1].description.description}</ReactMarkdown></TextRegularMarkdown>
          </SectionCol>
          <Col xs={{span: 24, order: 1}} md={{span: 12, order: 2}}>
            <SectionImg imgStyle={{objectFit: 'contain'}} image={content.sections[1].image.gatsbyImageData} alt={content.sections[1].image.title} />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
        <SectionRow>
          <SectionCol xs={{span: 24, order: 2}} md={{span: 12, order: 2}}>
            <H3>{content.sections[2].title}</H3>
            <TextRegularMarkdown><ReactMarkdown>{content.sections[2].description.description}</ReactMarkdown></TextRegularMarkdown>
          </SectionCol>
          <Col xs={{span: 24, order: 1}} md={{span: 12, order: 1}}>
            <SectionImg imgStyle={{objectFit: 'contain'}} image={content.sections[2].image.gatsbyImageData} alt={content.sections[2].image.title} />
          </Col>
        </SectionRow>
      </SiteContent>
      <SiteContent background={'white'}>
       <SectionRow>
       {content.features && content.features.length > 0 && content.features.map(f => (
         <Col key={f.title} xs={24} sm={12} md={8}>
           <FeatureItem feature={f} />
         </Col>
       ))}
       </SectionRow>
      </SiteContent>
    </div>
  );
};

export default IndexPage;
