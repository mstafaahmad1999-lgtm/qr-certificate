import React from "react";
import type { Certificate } from "../data/certificates";

interface Props {
  certificate: Certificate;
}

const CertificateInfoTable: React.FC<Props> = ({ certificate }) => {
  return (
    <table className="table table-bordered table-condensed" role="table" style={{ marginBottom: '20px' }}>
      <thead>
        <tr>
          <th colSpan={2} style={{ backgroundColor: '#f9f9f9', padding: '10px 8px', fontSize: '14px', fontWeight: 'normal', color: '#333' }}>
            BASIC INFORMATION OF CERTIFICATE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mobile-label-col">
            Exporter Name
            <span className="pull-right label label-info">1</span>
          </td>
          <td className="mobile-value-col">{certificate.exporterName}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Exporter Address
            <span className="pull-right label label-info">1</span>
          </td>
          <td className="mobile-value-col">{certificate.exporterAddress}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Consignee Name
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeName}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Consignee Address
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeAddress}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Consignee Country
            <span className="pull-right label label-info">2</span>
          </td>
          <td className="mobile-value-col">{certificate.consigneeCountry}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Transport Details
            <span className="pull-right label label-info">4</span>
          </td>
          <td className="mobile-value-col">{certificate.transport}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Country of Origin
            <span className="pull-right label label-info">3</span>
          </td>
          <td className="mobile-value-col">{certificate.origin}</td>
        </tr>
        <tr>
          <td className="mobile-label-col">
            Place and Date of Issue
            <div className="text-right" style={{ marginTop: '4px' }}>
              <span className="label label-info">8</span>
            </div>
          </td>
          <td className="mobile-value-col" style={{ verticalAlign: 'bottom' }}>{certificate.placeAndDate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CertificateInfoTable;
