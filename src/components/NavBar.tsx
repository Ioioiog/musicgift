
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
      <header className="fixed top-0 z-40 w-full bg-black/80 backdrop-blur-sm border-b border-border/50 light-theme:bg-white/80 light-theme:border-gray-200/50">
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
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-black light-theme:text-black light-theme:hover:bg-white")}>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Acasă
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-black light-theme:text-black light-theme:hover:bg-white")}>
                  <Link to="/despre-noi">
                    <Info className="w-4 h-4 mr-2" />
                    Despre Noi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-black light-theme:text-black light-theme:hover:bg-white")}>
                  <Link to="/pachete">
                    <Package className="w-4 h-4 mr-2" />
                    Pachete & Prețuri
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-black light-theme:text-black light-theme:hover:bg-white")}>
                  <Link to="/comanda">
                    <FileText className="w-4 h-4 mr-2" />
                    Comandă
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-black light-theme:text-black light-theme:hover:bg-white")}>
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                <Twitter size={18} />
              </a>
            </div>
            
            <Button size="sm" onClick={handleOrderClick} className="hidden md:flex text-white rounded-full bg-purple-800 hover:bg-purple-700">
              Comandă Acum
            </Button>
            
            <button className="md:hidden text-white light-theme:text-black" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-border/50 light-theme:bg-white light-theme:border-gray-200/50">
            <div className="container py-4 px-4 space-y-3">
              <Link to="/" className="flex items-center py-2 text-white hover:text-primary light-theme:text-black light-theme:hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                <Home className="w-5 h-5 mr-3" /> Acasă
              </Link>
              <Link to="/despre-noi" className="flex items-center py-2 text-white hover:text-primary light-theme:text-black light-theme:hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                <Info className="w-5 h-5 mr-3" /> Despre Noi
              </Link>
              <Link to="/pachete" className="flex items-center py-2 text-white hover:text-primary light-theme:text-black light-theme:hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                <Package className="w-5 h-5 mr-3" /> Pachete & Prețuri
              </Link>
              <Link to="/comanda" className="flex items-center py-2 text-white hover:text-primary light-theme:text-black light-theme:hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                <FileText className="w-5 h-5 mr-3" /> Comandă
              </Link>
              <Link to="/faq" className="flex items-center py-2 text-white hover:text-primary light-theme:text-black light-theme:hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                <HelpCircle className="w-5 h-5 mr-3" /> Întrebări Frecvente
              </Link>
              
              <div className="pt-4 flex items-center justify-between border-t border-border/50 light-theme:border-gray-200/50">
                <ThemeToggle />
                
                <div className="flex items-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors light-theme:text-black">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" onClick={() => {
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
