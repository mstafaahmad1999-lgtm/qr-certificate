import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [guid, setGuid] = useState("NEW-ID-1234");
  const [certNumber, setCertNumber] = useState("E1239335");
  
  const [exporterName, setExporterName] = useState("WHITRON TRADING DAYANIKLI TÜKETİM MALLARI LİMİTED ŞİRKETİ");
  const [exporterAddress, setExporterAddress] = useState("AKZİYARET MAH. ARAFAT SK. NO: 17GE KIZILTEPE / MARDİN");
  const [consigneeName, setConsigneeName] = useState("KHOSHNAW COMPANY");
  const [consigneeAddress, setConsigneeAddress] = useState("ERBİL");
  const [consigneeCountry, setConsigneeCountry] = useState("Iraq");
  const [transport, setTransport] = useState("TRUCK");
  const [origin, setOrigin] = useState("Türkiye");
  const [placeAndDate, setPlaceAndDate] = useState("KIZILTEPE CHAMBER OF COMMERCE AND INDUSTRY / 17.Sep.2026");
  
  const [goodsDescription, setGoodsDescription] = useState("MAKARNA(%100 EKMEKLİK ADİ BUĞDAYDAN) (BÜYÜK DİRSEK)");
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
    alert("This will save the certificate!\n\nUsers will be able to view it at:\nmedostobb.org/valid?Guid=" + guid);
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
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default" style={{ border: 'none', boxShadow: 'none' }}>
          
          <div className="panel-heading" style={{ backgroundColor: '#fff', border: 'none', paddingBottom: '0' }}>
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <img src="/logo.png" alt="Logo" style={{ width: '120px' }} />
              </div>
              <div className="col-sm-9 col-xs-12 text-right" style={{ marginTop: '10px' }}>
                <h4 style={{ fontSize: '18px', margin: '5px 0', color: '#333' }}>Certificate Verification</h4>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <input type="text" className="admin-input text-right" style={{ fontSize: '24px', fontWeight: 'bold', width: '250px', background: 'transparent', border: 'none', padding: '0' }} value={certNumber} onChange={e => setCertNumber(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            
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
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={exporterName} onChange={e => setExporterName(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Exporter Address
                    <span className="pull-right label label-info">1</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={exporterAddress} onChange={e => setExporterAddress(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Consignee Name
                    <span className="pull-right label label-info">2</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={consigneeName} onChange={e => setConsigneeName(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Consignee Address
                    <span className="pull-right label label-info">2</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={consigneeAddress} onChange={e => setConsigneeAddress(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Consignee Country
                    <span className="pull-right label label-info">2</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={consigneeCountry} onChange={e => setConsigneeCountry(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Transport Details
                    <span className="pull-right label label-info">4</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={transport} onChange={e => setTransport(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Country of Origin
                    <span className="pull-right label label-info">3</span>
                  </td>
                  <td className="mobile-value-col">
                    <input type="text" className="admin-input" value={origin} onChange={e => setOrigin(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className="mobile-label-col">
                    Place and Date of Issue
                    <div className="text-right" style={{ marginTop: '4px' }}>
                      <span className="label label-info">8</span>
                    </div>
                  </td>
                  <td className="mobile-value-col" style={{ verticalAlign: 'bottom' }}>
                    <input type="text" className="admin-input" value={placeAndDate} onChange={e => setPlaceAndDate(e.target.value)} />
                  </td>
                </tr>
              </tbody>
            </table>

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
                <tr>
                  <td className="col-sm-9">
                    <textarea className="admin-input" rows={2} value={goodsDescription} onChange={e => setGoodsDescription(e.target.value)} />
                  </td>
                  <td className="text-right">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                      <input type="text" className="admin-input text-right" style={{ width: '100px' }} value={quantity} onChange={e => setQuantity(e.target.value)} /> 
                      <input type="text" className="admin-input text-right" style={{ width: '60px' }} value={unit} onChange={e => setUnit(e.target.value)} />
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
