
import { H1UltraGradient, H2, H2Head, H3, TextRegularMarkdown } from '../shared/typography';
import React, { useRef } from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { IHomePage } from './index.interface';
import { SiteContent } from '../layout/layout';
// @ts-ignore
import styled from '@emotion/styled';
import { theme } from '../shared/theme';
import { SectionCol, SectionImg, SectionRow } from '../shared/page-components';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'antd';
import FeatureItem from '../shared/feature';
import useWindowWidth from '../shared/useWindowSize';
import { ParticlesContainer } from './partikel-container';



const HeadContainer = styled.div`
  width: 100%;
  height: calc(500px + 250px);
  position: relative;
  margin-top: -80px;
  /* border-radius: 50% / 0 0 250px 250px; */
  overflow: hidden;
  background: #041631;
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
  max-width: 1200px;
  margin: auto;
  margin-top: 150px;
  z-index: 2;
  padding: 0 3rem;
  
`;

const Waves = styled.svg`
  position: absolute;
  bottom: 0;
  height: 300px;
  width: 100%;
`

const RefLogoContainer = styled.div`
  max-width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

`


const RefLogo = styled(GatsbyImage)`
max-width: 250px;
max-height: 100%;
  margin: 0 1rem;
  height: auto;
  filter: grayscale(100%);
  transition: filter .2s ease-in;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
  }

  @media(max-width: 760px) {
    margin: 1rem;
    filter: grayscale(0%);

  }

`

type Props = {
  content: IHomePage;
  locale: string
};

const IndexPage: React.FC<Props> = ({ content, locale }: Props) => {
  const headRef = useRef<any>(null);
  const width = useWindowWidth();

  return (
    <div>
      <HeadContainer ref={headRef}>
      <Waves viewBox={width > 10 && width < 700 ? `0 0 ${width-200} 150` : "0 0 500 150"} preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 350.85,-49.98 505.46,66.61 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path></Waves>
        <AnnimatedHead>
          <Row justify='space-between' align='middle'>
            <Col sm={22} md={12}>
              <H1UltraGradient style={{color: theme.colors.txtLight.black}}>
                {locale === 'da-DK' ? 'Digitalt IT-konsulentbureau' : 'Digital IT consulting agency'}
                </H1UltraGradient>
          <H2Head>
            {locale === 'da-DK' ? 'Specialiseret rådgivning inden for softwareudvikling, data integration and DevOps' 
            : 'Specialized consultancy within software development, data integration and DevOps'} 
          </H2Head>
            </Col>
            <Col span={10}>

            </Col>
          </Row>
        </AnnimatedHead>
          <ParticlesContainer  />
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
     
      <SiteContent background={'white'}>
        <H3 style={{textAlign: 'center', fontWeight: 500, margin: 0}}>{locale === 'da-DK' ? 'Vores Services' : 'Our Services'}</H3>
        <div style={{height: '4px', background: '#041631', width: '150px', margin: 'auto'}}></div>
       <SectionRow style={{marginBottom: '4rem'}}>
       {content.features && content.features.length > 0 && content.features.map(f => (
         <Col key={f.title} xs={24} sm={12} md={12} lg={8}>
           <FeatureItem feature={f} />
         </Col>
       ))}
       </SectionRow>
      </SiteContent>
    </div>
  );
};

export default IndexPage;
