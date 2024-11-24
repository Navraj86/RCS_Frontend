import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import Bidding from "./pages/Bidding";
import LeaseAgreement from "./pages/LeaseAgreement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bidding" element={<Bidding />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="lease-agreement" element={<LeaseAgreement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
