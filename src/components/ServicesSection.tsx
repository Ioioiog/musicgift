
import { Music, Star, Users } from "lucide-react";
import { type FC } from 'react';

const ServicesSection: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
          Ce putem crea pentru tine?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[hsl(var(--light-purple))] p-4 rounded-full mb-4">
              <Music className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Pentru Momente Speciale</h3>
            <p className="text-gray-600">Melodii pentru aniversări, nunți, cadouri speciale</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[hsl(var(--light-purple))] p-4 rounded-full mb-4">
              <Star className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Pentru Branduri</h3>
            <p className="text-gray-600">Cântece pentru branduri și reclame</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[hsl(var(--light-purple))] p-4 rounded-full mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Pentru Artiști</h3>
            <p className="text-gray-600">Compoziții profesionale pentru artiști</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
