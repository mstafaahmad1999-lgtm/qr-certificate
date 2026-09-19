import React from "react";

interface HeaderProps {
  certificateNumber: string;
}

const Header: React.FC<HeaderProps> = ({ certificateNumber }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="row">
          <div className="col-sm-3">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="col-sm-9 text-right">
            <h4>Certificate Verification</h4>
            <h3>{certificateNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
