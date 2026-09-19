import React from "react";
import type { Certificate } from "../data/certificates";

interface Props {
  certificate: Certificate;
}

const CertificateInfoTable: React.FC<Props> = ({ certificate }) => {
  return (
    <table className="table table-bordered table-condensed" role="table">
      <thead>
        <tr>
          <th colSpan={2}>
            <h4>BASIC INFORMATION OF CERTIFICATE</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mobile-label-col">
            <b>Exporter Name</b>
            <span className="pull-right label label-info">1</span>
          </td>
          <td className="mobile-value-col">{certificate.exporterName}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Exporter Address</b>
            <span className="pull-right label label-info">1</span>
          </td>
          <td className="mobile-value-col">{certificate.exporterAddress}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Consignee Name</b>
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeName}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Consignee Address</b>
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeAddress}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Consignee Country</b>
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeCountry}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Transport Details</b>
            <span className="pull-right label label-info">4</span>
          </td>
          <td className="mobile-value-col">{certificate.transport}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Country of Origin</b>
            <span className="pull-right label label-info">3</span>
          </td>
          <td className="mobile-value-col">{certificate.origin}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            <b>Place and Date of Issue</b>
            <span className="pull-right label label-info">8</span>
          </td>
          <td className="mobile-value-col">{certificate.placeAndDate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CertificateInfoTable;
