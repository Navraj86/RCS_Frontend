import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
