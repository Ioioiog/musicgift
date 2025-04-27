
import { Music, Star, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff]">
      {/* Hero Section with Ethereal Gradient */}
      <section className="py-32 px-4 bg-[url('/lovable-uploads/eedb3ef3-ce34-4b1d-967d-990cdef10382.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 backdrop-blur-sm"/>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-8 animate-fade-in">
            Despre Noi
          </h1>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl italic mb-6">
              La MusicGift credem că muzica este cea mai pură formă de emoție.
            </p>
            <p className="mb-4">
              În fiecare poveste personală există un cântec nespus, o emoție ce merită să prindă viață.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Soft Background */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-secondary">
            Povestea MusicGift
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
            <p className="text-gray-700 mb-6 leading-relaxed">
              MusicGift s-a născut din dorința de a aduce oamenilor un cadou unic: o melodie creată special pentru ei.
              Într-o lume în care totul devine rapid și superficial, noi am ales să investim timp, suflet și pasiune în fiecare creație muzicală.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fondat de Mihai Gruia, producător muzical și fost membru al trupei internaționale Akcent, MusicGift combină experiența de scenă și studio cu emoția sinceră a poveștilor personale.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section with Gradient Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-secondary">
            Echipa Noastră
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mihai Gruia",
                icon: <Music className="text-purple-400" />,
                content: "Producător muzical și compozitor, membru fondator al trupei Akcent cu hituri celebre precum 'That's My Name', 'Kylie' și 'Stay with Me'."
              },
              {
                title: "Mango Records",
                icon: <Star className="text-purple-400" />,
                content: "Casă de discuri independentă, cu peste 1000 de piese distribuite global pe Spotify, Apple Music și YouTube."
              },
              {
                title: "DOMG Studio",
                icon: <Award className="text-purple-400" />,
                content: "Studio de creație muzicală premium, cu piese compuse pentru artiști români și internaționali de top: Akcent, Andra, Lora, Alina Eremia și alții."
              },
              {
                title: "Do Music for Good Band",
                icon: <Heart className="text-purple-400" />,
                content: "O echipă de interpreți profesioniști care colaborează pentru a da voce melodiilor MusicGift."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg border border-purple-100 transition-transform hover:-translate-y-1">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Icon Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-4xl">
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
              <div key={index} className="flex items-start gap-3 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow transition-all hover:shadow-md">
                <Music className="text-purple-400 mt-1 flex-shrink-0" />
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
