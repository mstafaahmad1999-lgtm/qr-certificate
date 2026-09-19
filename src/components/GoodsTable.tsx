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
          <th colSpan={2} style={{ backgroundColor: '#f9f9f9', padding: '10px 8px', fontSize: '14px', fontWeight: 'normal', color: '#333' }}>
            DESCRIPTION OF GOODS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#ffffff' }}>
          <td>
            Marks, numbers, number and kind of packages, description of goods
            <span className="pull-right label label-info">6</span>
          </td>
          <td>
            Quantity
            <span className="pull-right label label-info">7</span>
          </td>
        </tr>
        {goods.map((item, index) => (
          <tr key={index}>
            <td className="col-sm-9">{item.description}</td>
            <td className="text-right">
              {item.quantity}
              <br />
              {item.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoodsTable;
