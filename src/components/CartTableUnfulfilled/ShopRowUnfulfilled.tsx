import * as React from "react";
// import { maybe, renderCollection } from "../../../misc";

export interface IShopLogo {
  alt: string;
  url: string;
}

export interface IShopLine {
  id?: string;
  name: string;
  logoImage: IShopLogo;
}

const ShopRow: React.FC<{
  mediumScreen: boolean;
  line: IShopLine;
}> = ({ mediumScreen, line }) => {
  return (
    <tr>
      <td className="no-padding" colSpan={5}>
        <h5 className="cart__shop__title">
          <span className="cart__shop__name">
            <img
              className="cart__shop__logo"
              src={line.logoImage.url}
              alt={line.name}
            />
            <span>{line.name}</span>

            {/* {ushopStatusRender(line)} */}
          </span>
        </h5>
      </td>
    </tr>
  );
};

export default ShopRow;
