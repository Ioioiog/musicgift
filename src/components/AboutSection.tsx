
import { type FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section className="py-16 px-4 bg-light-purple">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
          Cine suntem
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          MusicGift înseamnă pasiune, experiență și emoție pură transformată în muzică.
          În spatele fiecărei creații se află o echipă de artiști și producători dedicați.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-playfair font-bold text-xl mb-3 text-secondary">Mihai Gruia</h3>
            <p className="text-gray-600">
              Producător muzical și compozitor, membru fondator Akcent, cu hituri internaționale precum "That's My Name", "Kylie".
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-playfair font-bold text-xl mb-3 text-secondary">Mango Records</h3>
            <p className="text-gray-600">
              Casă de discuri independentă, cu peste 1000 de piese lansate global pe Spotify, Apple Music și YouTube.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-playfair font-bold text-xl mb-3 text-secondary">DOMG Studio</h3>
            <p className="text-gray-600">
              Studio de creație muzicală pentru artiști români și internaționali de top: Akcent, Andra, Lora.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-playfair font-bold text-xl mb-3 text-secondary">Do Music for Good Band</h3>
            <p className="text-gray-600">
              Colectiv de interpreți profesioniști ce aduc la viață poveștile transformate în muzică.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
