
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-secondary">MusicGift</h3>
            <p className="text-gray-600">
              Transformă emoțiile în muzică cu melodii personalizate create de artiști profesioniști.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-secondary">Linkuri Rapide</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Acasă</Link></li>
              <li><Link to="/despre-noi" className="text-gray-600 hover:text-primary">Despre Noi</Link></li>
              <li><Link to="/pachete" className="text-gray-600 hover:text-primary">Pachete & Prețuri</Link></li>
              <li><Link to="/comanda" className="text-gray-600 hover:text-primary">Comandă</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">Întrebări Frecvente</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-secondary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termeni" className="text-gray-600 hover:text-primary flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="/confidentialitate" className="text-gray-600 hover:text-primary flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-primary flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Politica de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MusicGift. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
