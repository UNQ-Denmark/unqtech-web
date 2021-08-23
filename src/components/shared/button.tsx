import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { theme } from './theme';

const BtnBase = styled.button`
  padding: 12px 24px;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: 1px solid transparent;
  &:disabled { 
    background: ${theme.colors.greyLight.grey5};
    color: ${theme.colors.greyLight.grey25};
  }
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey55};
    cursor: pointer;
  }
`

export const BtnBlack = styled(BtnBase)`
  background: ${theme.colors.bgLight.black};
  color: ${theme.colors.txtLight.white};
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey55};
  }
  &:focus:enabled {
    background: ${theme.colors.greyLight.grey55};
    border: 2px solid ${theme.colors.txtLight.black};
  }
`

export const BtnWhite = styled(BtnBase)`
  background: ${theme.colors.bgLight.white};
  color: ${theme.colors.txtLight.black};
  &:disabled {
    background: ${theme.colors.greyLight.grey55};
    color: ${theme.colors.greyLight.grey25};
  }
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey5};
  }
  &:focus:enabled {
    background: ${theme.colors.greyLight.grey5};
    border: 2px solid ${theme.colors.bgLight.white};
  }
`

export const BtnGrey = styled(BtnBase)`
  background: ${theme.colors.greyLight.grey5};
  color: ${theme.colors.txtLight.black};
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey10};
  }
  &:focus:enabled {
    background: ${theme.colors.greyLight.grey10};
    border: 2px solid ${theme.colors.bgLight.white};
  }
`

export const BtnBlue = styled(BtnBase)`
  background: ${theme.colors.brandLight.heaven};
  color: ${theme.colors.txtLight.white};
  &:hover:enabled {
    background: ${theme.colors.brandLight.heavenHover};
  }
`

export const BtnBlackOut = styled(BtnBase)`
  background: transparent;
  color: ${theme.colors.txtLight.black};
  border: 2px solid ${theme.colors.txtLight.black};
  &:disabled {
    color: ${theme.colors.greyLight.grey25};
  }
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey55};
  }
`

export const BtnWhiteOut = styled(BtnBase)`
  background: transparent;
  color: ${theme.colors.txtLight.white};
  border: 2px solid ${theme.colors.txtLight.white};
  &:disabled {
    color: ${theme.colors.greyLight.grey55};
  }
  &:hover:enabled {
    background: ${theme.colors.greyLight.grey5};
  }
`

const TextLinkBase = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`

export const TextLinkBlack = styled(TextLinkBase)`
  color: ${theme.colors.txtLight.black};
  &:disabled {
    color: ${theme.colors.greyLight.grey25};
  }
`

export const TextLinkWhite = styled(TextLinkBase)`
  color: ${theme.colors.txtLight.white};
  &:disabled {
    color: ${theme.colors.greyLight.grey55};
  }
`

export const TextLinkBlue = styled(TextLinkBase)`
  color: ${theme.colors.brandLight.heaven};
  &:disabled {
    color: ${theme.colors.greyLight.grey25};
  }
  &:hover:enabled {
    background: ${theme.colors.brandLight.heavenHover};
  }
`

export const StyledTextLink = styled(TextLinkBlue)`
  font-size: 12px;
  font-weight: 300;
`

export const TextLinkTextSmall = styled(Link)`
    font-size: 14px;
    font-weight: 300;
    color: ${theme.colors.greyLight.grey55};
    margin-block-start: 1em;
    margin-block-end: 1em;
    display:block;
    &:hover {
      color: ${theme.colors.greyLight.grey5};
  }
`

export const CompanyBtn = styled.button`
  height: 40px;
  background: ${theme.colors.greyLight.grey5};
  border-radius: 4px;
  padding: 0 1rem;
  margin: 1rem 5px;
  border: transparent;

  &:disabled { 
    background: ${theme.colors.greyLight.grey5};
    color: ${theme.colors.greyLight.grey25};
  }

  &:hover:enabled {
    background: ${theme.colors.greyLight.grey10};
    cursor: pointer;
  }

`;