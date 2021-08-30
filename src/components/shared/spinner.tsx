import React from 'react';
import { Spin } from 'antd';
import styled from '@emotion/styled';
import { theme } from './theme';
import { TextRegularBold } from './typography';

export const StyledSpinner = styled(Spin)`
  align-self: center;
`;

const UNQSpinnerStyled = styled.img`
  height: 45px;
  width: 45px;
  position: absolute;
  margin: 9px;
  object-fit: contain;
`;
const UNQSpinnerBorder = styled.div`
  height: 80px;
  width: 80px;
  padding: 1px;
  border: 8px solid white;
  border-top-color: black;
  border-radius: 50%;
  animation: loading .9s ease-in-out infinite;
  position: absolute;
  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
const UNQSpinnerContainer = styled.div`
  height: 80px;
  width: 80px;
  padding: 2px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UNQSpinnerContainerFull = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 5000;
  position: fixed;
  background: ${theme.colors.bgLight.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UNQSpinner = () => {
  return (
    <UNQSpinnerContainer>
      <UNQSpinnerBorder />
      <UNQSpinnerStyled src="/logo/HQ5.png" />
    </UNQSpinnerContainer>
  );
};

type Props = {
    infoText?: string
}

export const UNQSpinnerFull: React.FC<Props> = ({infoText}: Props) => {
  return (
    <UNQSpinnerContainerFull>
      <UNQSpinnerContainer>
        <UNQSpinnerBorder />
        <UNQSpinnerStyled src="/logo/HQ5.png" />
      {infoText && <TextRegularBold style={{width: '100%', textAlign: 'center', marginTop: '80px'}}>{infoText}</TextRegularBold>}
      </UNQSpinnerContainer>
    </UNQSpinnerContainerFull>
  );
};
