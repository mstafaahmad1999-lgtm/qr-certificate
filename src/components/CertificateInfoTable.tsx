import React from "react";
import type { Certificate } from "../data/certificates";

interface CertificateInfoTableProps {
  certificate: Certificate;
}

interface FieldRow {
  marker: number;
  label: string;
  value: string;
}

const CertificateInfoTable: React.FC<CertificateInfoTableProps> = ({
  certificate,
}) => {
  const fields: FieldRow[] = [
    { marker: 1, label: "Exporter Name", value: certificate.exporterName },
    {
      marker: 1,
      label: "Exporter Address",
      value: certificate.exporterAddress,
    },
    { marker: 2, label: "Consignee Name", value: certificate.consigneeName },
    {
      marker: 2,
      label: "Consignee Address",
      value: certificate.consigneeAddress,
    },
    {
      marker: 2,
      label: "Consignee Country",
      value: certificate.consigneeCountry,
    },
    {
      marker: 4,
      label: "Transport Details",
      value: certificate.transportDetails,
    },
    {
      marker: 3,
      label: "Country of Origin",
      value: certificate.countryOfOrigin,
    },
    {
      marker: 8,
      label: "Place and Date of Issue",
      value: certificate.placeAndDateOfIssue,
    },
  ];

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
        {fields.map((field, index) => (
          <tr key={index}>
            <td className="col-sm-2 mobile-label-col">
              <b>{field.label}</b>
              <span className="pull-right label label-info">
                {field.marker}
              </span>
            </td>
            <td className="mobile-value-col">{field.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CertificateInfoTable;
