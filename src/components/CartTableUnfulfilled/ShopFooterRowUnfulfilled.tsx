import * as React from "react";
import { Money } from "@components/containers";
import { OrderByToken_orderByToken_lines_unitPrice_gross } from "unurshop-sdk/lib/queries/gqlTypes/OrderByToken";

const CostRow: React.FC<{
  mediumScreen: boolean;
  heading: string;
  cost: OrderByToken_orderByToken_lines_unitPrice_gross;
}> = ({ mediumScreen, heading, cost }) => (
  <tr>
    <td colSpan={mediumScreen ? 4 : 3}>{heading}</td>
    <td className="text-right money">
      {cost ? <Money money={cost} /> : "Тодорхойгүй"}
    </td>
  </tr>
);

export default CostRow;
