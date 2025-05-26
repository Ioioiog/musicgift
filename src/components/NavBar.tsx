
import { Home, Info, Package, FileText, HelpCircle, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleOrderClick = () => {
    navigate("/comanda");
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex h-20 items-center px-4 sm:px-6">
          {/* Logo positioned on the left */}
          <div className="flex-shrink-0 mr-8">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/caaeae8f-3eb2-4d46-b09d-247d41df883a.png" 
                alt="MusicGift Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain" 
              />
            </Link>
          </div>

          {/* Navigation menu positioned to the right of logo */}
          <NavigationMenu className="hidden md:flex flex-1">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:text-purple-600 hover:bg-purple-50")}>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Acasă
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:text-purple-600 hover:bg-purple-50")}>
                  <Link to="/despre-noi">
                    <Info className="w-4 h-4 mr-2" />
                    Despre Noi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:text-purple-600 hover:bg-purple-50")}>
                  <Link to="/pachete">
                    <Package className="w-4 h-4 mr-2" />
                    Pachete & Prețuri
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:text-purple-600 hover:bg-purple-50")}>
                  <Link to="/comanda">
                    <FileText className="w-4 h-4 mr-2" />
                    Comandă
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:text-purple-600 hover:bg-purple-50")}>
                  <Link to="/faq">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Întrebări
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side items */}
          <div className="flex items-center space-x-4 ml-auto">
            <ThemeToggle />
            
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
            
            <Button size="sm" onClick={handleOrderClick} className="hidden md:flex text-white rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg">
              Comandă Acum
            </Button>
            
            <button className="md:hidden text-gray-700" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container py-4 px-4 space-y-3">
              <Link to="/" className="flex items-center py-2 text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                <Home className="w-5 h-5 mr-3" /> Acasă
              </Link>
              <Link to="/despre-noi" className="flex items-center py-2 text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                <Info className="w-5 h-5 mr-3" /> Despre Noi
              </Link>
              <Link to="/pachete" className="flex items-center py-2 text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                <Package className="w-5 h-5 mr-3" /> Pachete & Prețuri
              </Link>
              <Link to="/comanda" className="flex items-center py-2 text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                <FileText className="w-5 h-5 mr-3" /> Comandă
              </Link>
              <Link to="/faq" className="flex items-center py-2 text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                <HelpCircle className="w-5 h-5 mr-3" /> Întrebări Frecvente
              </Link>
              
              <div className="pt-4 flex items-center justify-between border-t border-gray-200">
                <ThemeToggle />
                
                <div className="flex items-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full" onClick={() => {
                handleOrderClick();
                setMobileMenuOpen(false);
              }}>
                Comandă Acum
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
