import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findCertificateByNumber } from "../data/certificates";

const LookupPage: React.FC = () => {
  const [certNumber, setCertNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = certNumber.trim();
    if (!trimmed) {
      setError("Please enter a certificate number.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const certificate = findCertificateByNumber(trimmed);
      if (certificate) {
        navigate(`/valid?Guid=${encodeURIComponent(certificate.guid)}`);
      } else {
        setError(
          "Certificate not found. Please check the certificate number and try again."
        );
      }
      setLoading(false);
    }, 500);
  };

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
              <h3>Lookup</h3>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-condensed">
            <thead>
              <tr>
                <th colSpan={2}>
                  <h4>CERTIFICATE LOOKUP</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <form className="lookup-form" onSubmit={handleSubmit}>
                    <div className="lookup-field">
                      <label htmlFor="cert-number" className="lookup-label">
                        Certificate Number
                      </label>
                      <input
                        id="cert-number"
                        type="text"
                        className="lookup-input"
                        value={certNumber}
                        onChange={(e) => setCertNumber(e.target.value)}
                        placeholder="e.g. E1239335"
                        disabled={loading}
                        autoComplete="off"
                      />
                    </div>
                    <button
                      type="submit"
                      className="lookup-button"
                      disabled={loading}
                    >
                      {loading ? "Searching..." : "Search"}
                    </button>
                    {error && (
                      <div className="lookup-error" role="alert">
                        {error}
                      </div>
                    )}
                  </form>
                  <div className="lookup-note">
                    <p>
                      <strong>Demo certificates:</strong> E1239335, E1240001
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LookupPage;
