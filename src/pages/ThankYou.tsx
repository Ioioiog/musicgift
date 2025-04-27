
import React from 'react';
import { Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <Check className="w-16 h-16 text-warm-green" />
        </div>
        <h1 className="text-4xl font-playfair font-bold text-secondary mb-6">
          Mulțumim! 🎶
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Comanda ta a fost înregistrată cu succes!
          Echipa MusicGift este deja pregătită să transforme povestea ta în muzică.
        </p>
        <p className="text-md text-gray-600 mb-8">
          În cel mai scurt timp vei primi un email de confirmare.
          Dacă ai întrebări sau detalii suplimentare, ne poți contacta oricând la 
          <a href="mailto:contact@musicgift.ro" className="text-primary hover:underline ml-1">
            contact@musicgift.ro
          </a>
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <Button variant="outline" className="mr-4">
              Înapoi la Acasă
            </Button>
          </Link>
          <a href="mailto:contact@musicgift.ro">
            <Button className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" /> Contactează-ne
            </Button>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500 italic">
          🎵 Îți mulțumim că ai ales să creezi emoție alături de MusicGift!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
