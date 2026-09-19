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
    <div className="container-fluid" style={{ marginTop: '20px' }}>
      <div className="panel panel-default" style={{ border: 'none', boxShadow: 'none' }}>
        
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

        <div className="panel-body">
          <CertificateInfoTable certificate={certificate} />
          <GoodsTable goods={certificate.goods} />
        </div>
        
      </div>
    </div>
  );
};

export default VerificationPage;
