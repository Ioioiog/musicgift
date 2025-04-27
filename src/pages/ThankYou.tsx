
import React from 'react';
import { Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageContainer from '@/components/PageContainer';

const ThankYou = () => {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center p-8 glass-card">
          <div className="flex justify-center mb-6">
            <Check className="w-16 h-16 text-primary" />
          </div>
          <h1 className="font-mono text-4xl font-bold text-dark-text mb-6 dot-matrix">
            Mulțumim! 🎶
          </h1>
          <p className="text-lg text-dark-text-muted mb-6">
            Comanda ta a fost înregistrată cu succes!
            Echipa MusicGift este deja pregătită să transforme povestea ta în muzică.
          </p>
          <p className="text-md text-dark-text-muted mb-8">
            În cel mai scurt timp vei primi un email de confirmare.
            Dacă ai întrebări sau detalii suplimentare, ne poți contacta oricând la 
            <a href="mailto:contact@musicgift.ro" className="text-primary hover:underline ml-1">
              contact@musicgift.ro
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/">
              <Button variant="outline" className="border-dark-border text-dark-text-muted hover:bg-dark-card">
                Înapoi la Acasă
              </Button>
            </Link>
            <a href="mailto:contact@musicgift.ro">
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" /> Contactează-ne
              </Button>
            </a>
          </div>
          <p className="mt-8 text-sm text-dark-text-muted italic">
            🎵 Îți mulțumim că ai ales să creezi emoție alături de MusicGift!
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default ThankYou;
