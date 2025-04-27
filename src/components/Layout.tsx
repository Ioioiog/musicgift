
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-lato">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
