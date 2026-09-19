import React from "react";
import type { GoodsItem } from "../data/certificates";

interface GoodsTableProps {
  goods: GoodsItem[];
}

const GoodsTable: React.FC<GoodsTableProps> = ({ goods }) => {
  return (
    <table className="table table-bordered table-condensed" role="table">
      <thead>
        <tr>
          <th colSpan={2}>
            <h4>DESCRIPTION OF GOODS</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#F9F9F9' }}>
          <td className="goods-desc-col">
            <b>Marks, numbers, number and kind of packages, description of goods</b>
            <span className="pull-right label label-info">6</span>
          </td>
          <td className="goods-qty-col">
            <b>Quantity</b>
            <span className="pull-right label label-info">7</span>
          </td>
        </tr>
        {goods.map((item, index) => (
          <tr key={index}>
            <td className="goods-desc-col">{item.description}</td>
            <td className="goods-qty-col text-right">
              {item.quantity} {item.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoodsTable;
