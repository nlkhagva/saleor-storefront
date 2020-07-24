import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

// import ZaraLogo from '../../../../images/unurshop/xd/zara.jpg';
import UshopLogo from "../../../../images/unurshop/logo-v3.png";
import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  return (
    <S.Wrapper>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
        <S.ShopLogo>
          <img src={UshopLogo} alt="Zara" />
        </S.ShopLogo>
      </S.Image>
      <S.Price>
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      <S.Title>{product.name}</S.Title>
    </S.Wrapper>
  );
};
