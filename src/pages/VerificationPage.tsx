import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import CertificateInfoTable from "../components/CertificateInfoTable";
import GoodsTable from "../components/GoodsTable";
import { findCertificateByGuid } from "../data/certificates";

const VerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const guid = searchParams.get("Guid") || "";

  const certificate = findCertificateByGuid(guid);

  if (!guid) {
    return (
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>
              No certificate identifier provided. Please use a valid verification
              link.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>
              Certificate not found. The provided verification link is invalid or
              the certificate does not exist in the system.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="row">
            <div className="col-sm-3">
              <img src="/logo.png" alt="Logo" />
            </div>
            <div className="col-sm-9 text-right">
              <h4>Certificate Verification</h4>
              <h3>{certificate.certificateNumber}</h3>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <CertificateInfoTable certificate={certificate} />
          <GoodsTable goods={certificate.goods} />
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
