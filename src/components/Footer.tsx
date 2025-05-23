
import { Link } from "react-router-dom";
import { FileText, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border/30">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-mono text-h2 font-bold mb-4 text-white">MusicGift</h3>
            <p className="text-white">
              Transformă emoțiile în muzică cu melodii personalizate create de artiști profesioniști.
            </p>
            
            <div className="mt-6 flex items-center space-x-4 bg-transparent">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-h2 font-bold mb-4 text-white">Linkuri Rapide</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white hover:text-primary transition-colors">Acasă</Link></li>
              <li><Link to="/despre-noi" className="text-white hover:text-primary transition-colors">Despre Noi</Link></li>
              <li><Link to="/pachete" className="text-white hover:text-primary transition-colors">Pachete & Prețuri</Link></li>
              <li><Link to="/comanda" className="text-white hover:text-primary transition-colors">Comandă</Link></li>
              <li><Link to="/faq" className="text-white hover:text-primary transition-colors">Întrebări Frecvente</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-h2 font-bold mb-4 text-white">Contact & Legal</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@musicgift.ro" className="hover:text-primary transition-colors">contact@musicgift.ro</a>
              </div>
              <div className="flex items-center text-white">
                <Phone size={16} className="mr-2" />
                <a href="tel:+40721234567" className="hover:text-primary transition-colors">+40 721 234 567</a>
              </div>
              <div className="flex items-start text-white">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Strada Muzicii 42, București, România</span>
              </div>
            </div>
            
            <ul className="mt-6 space-y-2">
              <li>
                <Link to="/termeni" className="text-white hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="/confidentialitate" className="text-white hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Politica de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-10 pt-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} MusicGift. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
