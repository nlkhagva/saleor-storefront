import { css } from 'styled-components';

import { media, styled } from '@styles';

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  text-align: left;
`;

export const Wrapper = styled.div`
  /* background: ${props => props.theme.colors.light}; */
  padding: 0rem;
  margin: 0px;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;
  height: 100%;

  :hover {
    /* background-color: ${props => props.theme.colors.light}; */
  }

  ${media.largeScreen`
    padding: 0rem;
  `}
`;

export const Title = styled.h4`
  font-weight: normal;
  margin: 0 0 0.5rem 0;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const Image = styled.div`
  background: ${props => props.theme.colors.light};
  width: auto;
  height: auto;
  max-width: 100%;
  position: relative;

  > img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
`;

export const ShopLogo = styled.div`
  position: absolute;
  top: .5rem; 
  left: .5rem;
  width: 22.5%; 
  max-width: 60px;

  > img { 
    width: 100%; 
    border-radius: 100%;
  }
`