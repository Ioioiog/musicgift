
import { Music, Star, Award, Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-light-purple to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-8 animate-fade-in">
            Despre Noi
          </h1>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl italic mb-6">
              La MusicGift credem că muzica este cea mai pură formă de emoție.
            </p>
            <p className="mb-4">
              În fiecare poveste personală există un cântec nespus, o emoție ce merită să prindă viață.
            </p>
            <p>
              Noi transformăm aceste emoții în melodii reale, create de artiști adevărați, pentru oameni adevărați.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-secondary">
            Povestea MusicGift
          </h2>
          <div className="bg-light-purple p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-6">
              MusicGift s-a născut din dorința de a aduce oamenilor un cadou unic: o melodie creată special pentru ei.
              Într-o lume în care totul devine rapid și superficial, noi am ales să investim timp, suflet și pasiune în fiecare creație muzicală.
            </p>
            <p className="text-gray-700">
              Fondat de Mihai Gruia, producător muzical și fost membru al trupei internaționale Akcent, MusicGift combină experiența de scenă și studio cu emoția sinceră a poveștilor personale.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-light-purple">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-secondary">
            Echipa Noastră
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Music className="text-accent" />
                Mihai Gruia
              </h3>
              <p className="text-gray-600 mb-4">
                Producător muzical și compozitor, membru fondator al trupei Akcent – una dintre cele mai de succes formații pop românești la nivel internațional, cu hituri celebre precum "That's My Name", "Kylie" și "Stay with Me".
              </p>
              <p className="text-gray-600">
                Astăzi, coordonează echipa MusicGift și DOMG Studio, aducând expertiza sa în fiecare proiect livrat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Star className="text-accent" />
                Mango Records
              </h3>
              <p className="text-gray-600">
                Casă de discuri independentă, specializată în lansarea și distribuția de muzică originală la nivel internațional. Cu peste 1000 de piese distribuite global pe Spotify, Apple Music și YouTube.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Award className="text-accent" />
                DOMG Studio
              </h3>
              <p className="text-gray-600">
                Studio de creație muzicală premium, cu piese compuse pentru artiști români și internaționali de top: Akcent, Andra, Lora, Alina Eremia și alții.
                Calitate audio impecabilă, procese profesionale de compoziție, înregistrare și mix-master.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Music className="text-accent" />
                Do Music for Good Band
              </h3>
              <p className="text-gray-600">
                O echipă de interpreți profesioniști care colaborează pentru a da voce melodiilor MusicGift.
                Fiecare voce, fiecare notă este aleasă pentru a exprima cât mai autentic emoția clientului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-secondary">
            Misiunea Noastră
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16 italic">
            Să aducem emoție autentică în viețile oamenilor, prin creații muzicale personalizate de cea mai înaltă calitate.
          </p>

          <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-secondary">
            De ce să alegi MusicGift?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Lucrezi cu o echipă reală de artiști, nu cu un sistem automatizat",
              "Melodiile sunt compuse de la zero, inspirate din povestea ta",
              "Calitate de studio internațional – garantată de Mango Records & DOMG",
              "Livrare rapidă și suport personalizat",
              "Emoție 100% autentică în fiecare notă"
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-light-purple rounded-lg">
                <Check className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
