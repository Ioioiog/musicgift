import { Home, Info, Package, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
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

  const handleOrderClick = () => {
    navigate("/comanda");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold text-secondary">
            MusicGift
          </span>
        </Link>

        <NavigationMenu className="mx-auto hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="w-4 h-4 mr-2" />
                  Acasă
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/despre-noi">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Info className="w-4 h-4 mr-2" />
                  Despre Noi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pachete">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Package className="w-4 h-4 mr-2" />
                  Pachete & Prețuri
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/comanda">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FileText className="w-4 h-4 mr-2" />
                  Comandă
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Întrebări Frecvente
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button 
            size="sm" 
            className="hidden md:flex bg-accent hover:bg-accent/90 text-white rounded-full"
            onClick={handleOrderClick}
          >
            Comandă Acum
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavBar;

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" className="rounded-full">
        <span className="sr-only">Deschide meniul</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4 6H20M4 12H20M4 18H20" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};
