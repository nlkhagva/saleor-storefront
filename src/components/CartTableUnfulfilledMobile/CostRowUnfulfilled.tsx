import * as React from "react";

const CostRow: React.FC<{
  mediumScreen: boolean;
  heading: string;
  cost: React.ReactNode;
}> = ({ mediumScreen, heading, cost }) => (
  <tr>
    <td colSpan={mediumScreen ? 3 : 2} className="cart-table__cost">
      {heading}
    </td>
    <td>{cost}</td>
  </tr>
);

export default CostRow;
