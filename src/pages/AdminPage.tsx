import React, { useState } from "react";

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [certNumber, setCertNumber] = useState("A5730335");
  const [exporterName, setExporterName] = useState("");
  const [consigneeName, setConsigneeName] = useState("");
  const [transport, setTransport] = useState("");
  const [origin, setOrigin] = useState("TURKEY");
  const [placeAndDate, setPlaceAndDate] = useState("");
  const [chamber, setChamber] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");
  const [quantity, setQuantity] = useState("");
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
    alert("This will save all 7 sections to the database once connected!");
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
      <div className="panel panel-primary">
        <div className="panel-heading"><h3 className="panel-title">Create New Certificate</h3></div>
        <div className="panel-body">
          <form onSubmit={handleCreate}>
            
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Certificate Number</label>
                  <input type="text" className="form-control" value={certNumber} onChange={e => setCertNumber(e.target.value)} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Country of Origin</label>
                  <input type="text" className="form-control" value={origin} onChange={e => setOrigin(e.target.value)} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Transport Details</label>
                  <input type="text" className="form-control" value={transport} onChange={e => setTransport(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>1. Exporter Name & Address</label>
                  <textarea className="form-control" rows={3} value={exporterName} onChange={e => setExporterName(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>2. Consignee Name & Address</label>
                  <textarea className="form-control" rows={3} value={consigneeName} onChange={e => setConsigneeName(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>5. Place and Date of Issue</label>
                  <textarea className="form-control" rows={2} value={placeAndDate} onChange={e => setPlaceAndDate(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>5. Chamber of Commerce (Signatory)</label>
                  <textarea className="form-control" rows={2} value={chamber} onChange={e => setChamber(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label>6. Goods Description</label>
                  <textarea className="form-control" rows={3} value={goodsDescription} onChange={e => setGoodsDescription(e.target.value)} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>7. Quantity</label>
                  <input type="text" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>Unit</label>
                  <input type="text" className="form-control" value={unit} onChange={e => setUnit(e.target.value)} />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success btn-lg btn-block">Generate & Save Certificate</button>
          </form>
          
          <hr />
          <div className="alert alert-info">
            <strong>Note:</strong> We need to connect a Database (like Firebase) before these certificates will be saved to the live website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
