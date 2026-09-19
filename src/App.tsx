import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VerificationPage from "./pages/VerificationPage";
import LookupPage from "./pages/LookupPage";
import AdminPage from "./pages/AdminPage";
import "./styles/certificate.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/valid" element={<VerificationPage />} />
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/super" element={<AdminPage />} />
        <Route path="/" element={<Navigate to="/lookup" replace />} />
        <Route path="*" element={<Navigate to="/lookup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
