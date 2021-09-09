import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from './theme';

import { Card, Divider } from 'antd';
import { TextRegular, TextSmall, TextXsmall } from './typography';
import { IPriceCard } from './contentful.interface';
import { BtnBlue } from './button';
import { isBrowser } from './utils';

const StyledPrice = styled.h4`
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  color: ${theme.colors.brandLight.secoundary};
  margin: 0;
`;

const StyledValue = styled.div`
  background: ${theme.colors.brandLight.secoundary};
  padding: 0.25rem 0.75rem;
  position: absolute;
  top: -15px;
  width: 100px;
  left: calc(50% - 50px);
`

const StyledCard = styled(Card)`
  height: 100%;
  min-width: 200px;
  border-radius: 2px;
  margin: 0.5rem;
  border: 1px solid ${theme.colors.brandLight.secoundary};
  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
  }
`;


type Props = {
  priceCard: IPriceCard
}

const PriceCard: React.FC<Props> = ({priceCard}: Props) => {
  var element = isBrowser() && document.getElementById("contactForm");

  useEffect(() => {
    element = isBrowser() && document.getElementById("contactForm");
  }, [])
  
  return (
    <StyledCard>
      {priceCard.bestValue && <StyledValue><TextSmall style={{textAlign: 'center', color: "white", margin: 0}}>Best Value</TextSmall></StyledValue>}
      <TextRegular style={{textAlign: 'center'}}>{priceCard.title}</TextRegular>
      <StyledPrice>{priceCard.price}<TextXsmall style={{display: 'inline'}}>{priceCard.currency}</TextXsmall></StyledPrice>
      <TextSmall style={{textAlign: 'center', minHeight: '80px'}}>{priceCard.description ? priceCard.description.description : ''}</TextSmall>
      <BtnBlue onClick={() => {element && element.scrollIntoView({behavior: 'smooth', block: 'start'});}}>
        {' '}
        {priceCard.btnText}
      </BtnBlue>
      <Divider />
       {priceCard.features && priceCard.features.map((feature: string, key: number) => {
         return (
           <TextSmall key={key} style={{textAlign: "center"}}>{feature}</TextSmall>
         )
       })}
    </StyledCard>
  );
};
export default PriceCard;
