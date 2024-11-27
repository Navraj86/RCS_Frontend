import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Bidding from "./pages/Bidding";
import Users from "./pages/Users";
import Properties from "./pages/Properties";
import AddUser from "./pages/AddUser";
import AddProperty from "./pages/AddProperty";
import LeaseAgreement from "./pages/LeaseAgreement";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/bidding" element={<Bidding />} />
          <Route path="/users" element={<Users />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addproperty" element={<AddProperty />} />
          <Route path="/leaseagreement" element={<LeaseAgreement />} />
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
