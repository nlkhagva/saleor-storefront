import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import { Money, TaxedMoney } from '@components/containers';
import { Thumbnail } from '@components/molecules';
import { ICheckoutModelLine } from '@sdk/repository';

import { generateProductUrl } from '../../../core/utils';
import removeImg from '../../../images/garbage.svg';
import UshopLogo from '../../../images/unurshop/logo-v3.png';
import ZaraLogo from '../../../images/unurshop/xd/zara.jpg';

const ProductList: React.SFC<{
  lines: ICheckoutModelLine[];
  remove(variantId: string): void;
}> = ({ lines, remove }) => {
  const ushops = [];


  lines.map((line) => {
    const _shop = ushops.find(_shop => _shop.id === line.variant.product.ushop.id)
    if (_shop === undefined) {
      ushops.push({
        ...line.variant.product.ushop,
        lines: [line],
      })
    } else {
      _shop.lines.push(line)
    }
  })


  const [shopToggle, setShopToggle] = useState(ushops.map((_, index) => true))

  // console.log(shopToggle)



  return ushops.map((_shop, index) => {
    const shopTotal = _shop.lines.map(line => line.totalPrice.gross.amount).reduce((a, c) => (a + c))

    let priceFormat = null

    return (
      <div key={index} className="cart__shop">
        <h4 className="cart__shop__title">
          <img className="cart__shop__logo" src={index % 2 === 0 ? ZaraLogo : UshopLogo} alt="Zara" />
          <span className="cart__shop__name">{_shop.name}</span>
        </h4>
        {shopToggle[index] &&
          <>
            <ul className="cart__list">
              {_shop.lines.map((line, index) => {
                const productUrl = generateProductUrl(
                  line.variant.product.id,
                  line.variant.product.name
                );
                const key = line.id ? `id-${line.id}` : `idx-${index}`;

                if (!priceFormat) {
                  priceFormat = line.variant.pricing.price.gross
                }

                return (
                  <li key={key} className="cart__list__item">
                    <Link to={productUrl}>
                      <Thumbnail source={line.variant.product} />
                    </Link>
                    <div className="cart__list__item__details">
                      <p>
                        <TaxedMoney taxedMoney={line.variant.pricing.price} />
                      </p>
                      <Link to={productUrl}>
                        <p>{line.variant.product.name}</p>
                      </Link>
                      <span className="cart__list__item__details__variant">
                        <span>{line.variant.name}</span>
                        <span>{`Qty: ${line.quantity}`}</span>
                      </span>
                      <ReactSVG
                        path={removeImg}
                        className="cart__list__item__details__delete-icon"
                        onClick={() => remove(line.variant.id)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <table className="ushop-price-table">
              <tbody>
                <tr>
                  <td>Барааны үнэ</td>
                  <td><Money money={{ ...priceFormat, amount: shopTotal }} /></td>
                </tr>
                <tr>
                  <td>Англи дотоод хүргэлт</td>
                  <td></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Нийт</td>
                  <td><Money money={{ ...priceFormat, amount: shopTotal }} /></td>
                </tr>
              </tfoot>
            </table>
          </>
        }

      </div>)
  })

};
export default ProductList;
