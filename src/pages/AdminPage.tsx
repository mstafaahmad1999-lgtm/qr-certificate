import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [guid, setGuid] = useState("NEW-ID-1234");
  const [certNumber, setCertNumber] = useState("A5730335");
  const [exporterName, setExporterName] = useState("MAKARNA(%100 EKMEKLİK ADİ BUĞDAYDAN)");
  const [consigneeName, setConsigneeName] = useState("CONSIGNEE NAME\nADDRESS");
  const [transport, setTransport] = useState("BY TRUCK");
  const [origin, setOrigin] = useState("TURKEY");
  const [placeAndDate, setPlaceAndDate] = useState("KIZILTEPE / 17.Sep.2026");
  const [chamber, setChamber] = useState("KIZILTEPE CHAMBER OF COMMERCE AND INDUSTRY");
  
  const [goodsDescription, setGoodsDescription] = useState("MAKARNA(%100 EKMEKLİK ADİ BUĞDAYDAN)\n(BÜYÜK DİRSEK)");
  const [quantity, setQuantity] = useState("54,500.00");
  const [unit, setUnit] = useState("KG");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Admin123!") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This will save the certificate to the database!\n\nUsers will be able to view it at:\nmedostobb.org/valid?Guid=" + guid);
  };

  if (!isAuthenticated) {
    return (
      <div className="container-fluid" style={{ marginTop: '50px', maxWidth: '400px' }}>
        <div className="panel panel-default">
          <div className="panel-heading"><h3 className="panel-title">Admin Login</h3></div>
          <div className="panel-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ marginTop: '20px' }}>
      
      <div className="alert alert-warning">
        <strong>Admin Template Mode:</strong> Edit the text directly inside the certificate template below, then click Save at the bottom.
      </div>
      
      <form onSubmit={handleCreate}>
        
        <div className="panel panel-info">
          <div className="panel-heading"><h3 className="panel-title">System Settings</h3></div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6">
                <label>Custom Link ID (Guid)</label>
                <input type="text" className="form-control" value={guid} onChange={e => setGuid(e.target.value)} />
                <small className="text-muted">Users will visit: medostobb.org/valid?Guid={guid}</small>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col-sm-3">
                <img src="/logo.png" alt="Logo" style={{ width: '140px' }} />
              </div>
              <div className="col-sm-9 text-right">
                <h4>Certificate Verification</h4>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <input type="text" className="admin-input text-right" style={{ fontSize: '24px', fontWeight: 'bold', width: '250px' }} value={certNumber} onChange={e => setCertNumber(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            
            <table className="table table-bordered table-condensed" role="table">
              <tbody>
                <tr>
                  <td className="mobile-label-col"><b>1. Exporter (name, full address, country)</b></td>
                  <td className="mobile-value-col">
                    <textarea className="admin-input" rows={3} value={exporterName} onChange={e => setExporterName(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col"><b>2. Consignee (name, full address, country)</b></td>
                  <td className="mobile-value-col">
                    <textarea className="admin-input" rows={3} value={consigneeName} onChange={e => setConsigneeName(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col"><b>3. Transport details</b></td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={transport} onChange={e => setTransport(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col"><b>4. Country of origin</b></td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={origin} onChange={e => setOrigin(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col"><b>5. Place and date of issue / Chamber of Commerce</b></td>
                  <td className="mobile-value-col">
                    <textarea className="admin-input" rows={1} value={placeAndDate} onChange={e => setPlaceAndDate(e.target.value)} placeholder="Place and Date..." />
                    <textarea className="admin-input" rows={2} style={{ marginTop: '5px' }} value={chamber} onChange={e => setChamber(e.target.value)} placeholder="Chamber of Commerce..." />
                  </td>
                </tr>
              </tbody>
            </table>

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
                  <td>
                    <b>Marks, numbers, number and kind of packages, description of goods</b>
                    <span className="pull-right label label-info">6</span>
                  </td>
                  <td>
                    <b>Quantity</b>
                    <span className="pull-right label label-info">7</span>
                  </td>
                </tr>
                <tr>
                  <td className="col-sm-9">
                    <textarea className="admin-input" rows={4} value={goodsDescription} onChange={e => setGoodsDescription(e.target.value)} />
                  </td>
                  <td className="text-right">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '5px' }}>
                      <input type="text" className="admin-input text-right" style={{ width: '70%' }} value={quantity} onChange={e => setQuantity(e.target.value)} /> 
                      <input type="text" className="admin-input text-right" style={{ width: '30%' }} value={unit} onChange={e => setUnit(e.target.value)} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <button type="submit" className="btn btn-success btn-lg btn-block" style={{ marginBottom: '40px' }}>
          💾 Save Certificate to Database
        </button>

      </form>
    </div>
  );
};

export default AdminPage;
