
import { Home, Info, Package, FileText, HelpCircle, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

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
    <header className="fixed top-0 z-40 w-full bg-dark-bg/80 backdrop-blur-sm border-b border-dark-border/50">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-mono text-2xl font-bold text-dark-text dot-matrix">
            MusicGift
          </span>
        </Link>

        <NavigationMenu className="mx-auto hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-dark-text hover:bg-dark-card")}>
                  <Home className="w-4 h-4 mr-2" />
                  Acasă
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/despre-noi">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-dark-text hover:bg-dark-card")}>
                  <Info className="w-4 h-4 mr-2" />
                  Despre Noi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pachete">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-dark-text hover:bg-dark-card")}>
                  <Package className="w-4 h-4 mr-2" />
                  Pachete & Prețuri
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/comanda">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-dark-text hover:bg-dark-card")}>
                  <FileText className="w-4 h-4 mr-2" />
                  Comandă
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-dark-text hover:bg-dark-card")}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Întrebări
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
          </div>
          
          <Button 
            size="sm" 
            className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full"
            onClick={handleOrderClick}
          >
            Comandă Acum
          </Button>
          
          <button 
            className="md:hidden text-dark-text"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-bg border-t border-dark-border/50">
          <div className="container py-4 px-4 space-y-3">
            <Link to="/" className="flex items-center py-2 text-dark-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              <Home className="w-5 h-5 mr-3" /> Acasă
            </Link>
            <Link to="/despre-noi" className="flex items-center py-2 text-dark-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              <Info className="w-5 h-5 mr-3" /> Despre Noi
            </Link>
            <Link to="/pachete" className="flex items-center py-2 text-dark-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              <Package className="w-5 h-5 mr-3" /> Pachete & Prețuri
            </Link>
            <Link to="/comanda" className="flex items-center py-2 text-dark-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              <FileText className="w-5 h-5 mr-3" /> Comandă
            </Link>
            <Link to="/faq" className="flex items-center py-2 text-dark-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              <HelpCircle className="w-5 h-5 mr-3" /> Întrebări Frecvente
            </Link>
            
            <div className="pt-2 flex items-center space-x-4 border-t border-dark-border/50">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark-text-muted hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
              onClick={() => {
                handleOrderClick();
                setMobileMenuOpen(false);
              }}
            >
              Comandă Acum
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
