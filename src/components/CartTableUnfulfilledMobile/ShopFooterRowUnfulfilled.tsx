import * as React from "react";
import { Money } from "@components/containers";
import { OrderByToken_orderByToken_lines_unitPrice_gross } from "unurshop-sdk/lib/queries/gqlTypes/OrderByToken";

const CostRow: React.FC<{
  heading: string;
  cost: OrderByToken_orderByToken_lines_unitPrice_gross;
}> = ({ heading, cost }) => (
  <tr>
    <td colSpan={3}>{heading}</td>
    <td className="text-right money">
      {cost ? <Money money={cost} /> : "Тодорхойгүй"}
    </td>
  </tr>
);

export default CostRow;
