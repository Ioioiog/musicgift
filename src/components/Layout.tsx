
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const Layout = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`flex flex-col min-h-screen font-lato transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <main className="flex-grow pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
