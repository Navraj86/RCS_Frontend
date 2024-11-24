import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/addproperty" element={<AddProperty />} />
          <Route path="/properties" element={<Properties />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
