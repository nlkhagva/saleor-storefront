import React from "react";

import { TaxedMoney, Money } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { getWasPrice } from "@temp/views/Product/utils";

// import ZaraLogo from '../../../../images/unurshop/xd/zara.jpg';
// import UshopLogo from "../../../../images/unurshop/logo-v3.png";
import * as S from "./styles";
// import { IProps } from "./types";

export const ProductTile: React.FC<any> = ({ product }: any) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;
  const wasPrice = getWasPrice(product);

  const getSalePercent = (wasPrice: any, price: any) => {
    return wasPrice ? `${Math.round(100 - (price * 100) / wasPrice)}%` : false;
  };

  return (
    <S.Wrapper>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
        {price && getSalePercent(wasPrice, price.gross.amount) && (
          <S.Sale>-{getSalePercent(wasPrice, price.gross.amount)}</S.Sale>
        )}
      </S.Image>
      <S.RowLk>
        <S.ShopLogo>
          <img src={product.ushop.logoImage.url} alt="Zara" />
        </S.ShopLogo>
        <S.TitleAndPrice>
          <S.Price>
            <TaxedMoney taxedMoney={price} />
            {wasPrice && price && (
              <>
                &nbsp;&nbsp;&nbsp;
                <span style={{ textDecoration: "line-through" }}>
                  <Money
                    money={{
                      amount: parseFloat(wasPrice),
                      currency: price.gross.currency,
                    }}
                  />
                </span>
              </>
            )}
          </S.Price>

          <S.Title>{product.name}</S.Title>
        </S.TitleAndPrice>
      </S.RowLk>
    </S.Wrapper>
  );
};
