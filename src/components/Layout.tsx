
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "@/contexts/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex flex-col min-h-screen font-lato ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <NavBar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
