import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import CertificateInfoTable from "../components/CertificateInfoTable";
import GoodsTable from "../components/GoodsTable";
import "../styles/certificate.css";
import type { Certificate } from "../data/certificates";

const VerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const guid = searchParams.get("Guid");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "TOBB - MEDOS";
    const fetchCert = async () => {
      if (!guid) {
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "certificates", guid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCertificate(docSnap.data() as Certificate);
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchCert();
  }, [guid]);

  if (loading) {
    return (
      <div className="container-fluid" style={{ marginTop: '20px', textAlign: 'center' }}>
        Loading certificate...
      </div>
    );
  }

  if (!guid || !certificate) {
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
    <div className="container-fluid" style={{ marginTop: '10px' }}>

      {/* Header */}
      <div className="row" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
        <div className="col-sm-3 col-xs-4">
          <img src="/logo.png" alt="Logo" style={{ width: '90px' }} />
        </div>
        <div className="col-sm-9 col-xs-8 text-right">
          <span style={{ fontSize: '14px', color: '#555', display: 'block' }}>Certificate Verification</span>
          <span style={{ fontSize: '22px', color: '#333', fontWeight: 'bold', display: 'block' }}>{certificate.certificateNumber}</span>
        </div>
      </div>

      {/* Tables */}
      <CertificateInfoTable certificate={certificate} />
      <GoodsTable goods={certificate.goods} />

    </div>
  );
};

export default VerificationPage;
