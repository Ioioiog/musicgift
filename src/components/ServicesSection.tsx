
import { Music, Star, Users } from "lucide-react";
import { type FC } from 'react';

const ServicesSection: FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-secondary border-b border-warm-yellow pb-4 inline-block mx-auto">
          Ce putem crea pentru tine?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
            <div className="bg-[#FFEFD5] p-5 rounded-full mb-5 shadow-md group-hover:bg-warm-yellow transition-colors duration-300">
              <Music className="w-9 h-9 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary">Pentru Momente Speciale</h3>
            <p className="text-gray-600">Melodii personalizate pentru aniversări, nunți, și alte ocazii importante din viața ta</p>
          </div>
          <div className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
            <div className="bg-[#FFEFD5] p-5 rounded-full mb-5 shadow-md group-hover:bg-warm-yellow transition-colors duration-300">
              <Star className="w-9 h-9 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary">Pentru Branduri</h3>
            <p className="text-gray-600">Cântece originale pentru branduri și reclame care captivează audiența ta</p>
          </div>
          <div className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
            <div className="bg-[#FFEFD5] p-5 rounded-full mb-5 shadow-md group-hover:bg-warm-yellow transition-colors duration-300">
              <Users className="w-9 h-9 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary">Pentru Artiști</h3>
            <p className="text-gray-600">Compoziții profesionale care te ajută să-ți dezvolți cariera și să-ți impresionezi fanii</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
