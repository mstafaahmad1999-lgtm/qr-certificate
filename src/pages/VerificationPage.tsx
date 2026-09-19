import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { findCertificateByGuid } from "../data/certificates";
import CertificateInfoTable from "../components/CertificateInfoTable";
import GoodsTable from "../components/GoodsTable";
import "../styles/certificate.css";

const VerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const guid = searchParams.get("Guid");

  useEffect(() => {
    document.title = "TOBB - MEDOS";
  }, []);

  if (!guid) {
    return <div className="container" style={{ marginTop: '20px' }}><div className="alert alert-danger">Invalid verification link.</div></div>;
  }

  const certificate = findCertificateByGuid(guid);

  if (!certificate) {
    return (
      <div className="container-fluid" style={{ marginTop: '20px' }}>
        <div className="panel panel-default">
          <div className="panel-body">
            Certificate not found. The provided verification link is invalid or the certificate does not exist in the system.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ marginTop: '20px' }}>
      <div className="panel panel-default" style={{ border: 'none', boxShadow: 'none' }}>
        
        {/* Header Section */}
        <div className="panel-heading" style={{ backgroundColor: '#fff', border: 'none', paddingBottom: '0' }}>
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <img src="/logo.png" alt="Logo" style={{ width: '120px' }} />
            </div>
            <div className="col-sm-9 col-xs-12 text-right" style={{ marginTop: '10px' }}>
              <h4 style={{ fontSize: '18px', margin: '5px 0', color: '#333' }}>Certificate Verification</h4>
              <h3 style={{ fontSize: '24px', margin: '5px 0' }}>{certificate.certificateNumber}</h3>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="panel-body">
          <CertificateInfoTable certificate={certificate} />
          <GoodsTable goods={certificate.goods} />
        </div>
        
      </div>
    </div>
  );
};

export default VerificationPage;
