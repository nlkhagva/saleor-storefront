import { css } from "styled-components";

import { media, styled } from "@styles";

const textProps = css`
  font-size: ${props => props.theme.typography.smallFontSize};
  text-align: left;
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.light};
  padding: 0rem;
  margin: 0px;
  text-align: center;
  max-height: 30rem; 
  transition: 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  line-height: 14px;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
  font-weight: 600;
  margin-top: 0.5rem;
  > span {
    &:nth-child(1) {
      color: ${props => props.theme.colors.saleColor};
    }
  }
`;

export const RowLk = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 48px 1fr;
  background: ${props => props.theme.colors.white};
`;
export const TitleAndPrice = styled.div``;

export const Image = styled.div`
  /* background: ${props => props.theme.colors.light}; */
  width: auto;
  height: 100%;
  max-width: 100%;
  display: flex;
  position: relative;

  > img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 26rem;
    object-fit: cover;
  }
`;

export const ShopLogo = styled.div`
  margin-top: 0.8rem;
  > img {
    width: 100%;
  }
`;
export const Sale = styled.div`
  position: absolute;
  bottom: 1rem;
  padding: 0.2rem 0.3rem;
  background-color: #eb0037;
  color: #fff;
`;
