
import { Music, Star, Award, Heart } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <PageContainer>
      {/* Hero Section with Ethereal Gradient */}
      <section className="py-32 px-4 bg-emotion-pattern bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-dark-gradient"/>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="font-mono text-5xl md:text-6xl font-bold text-dark-text mb-8 animate-fade-in dot-matrix">
            Despre Noi
          </h1>
          <div className="prose prose-lg mx-auto text-dark-text-muted">
            <p className="text-xl italic mb-6">
              La MusicGift credem că muzica este cea mai pură formă de emoție.
            </p>
            <p className="mb-4">
              În fiecare poveste personală există un cântec nespus, o emoție ce merită să prindă viață.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Glass Effect */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-mono text-3xl font-bold mb-8 text-center text-dark-text dot-matrix">
            Povestea MusicGift
          </h2>
          <div className="glass-card p-8 hover-glow">
            <p className="text-dark-text-muted mb-6 leading-relaxed">
              MusicGift s-a născut din dorința de a aduce oamenilor un cadou unic: o melodie creată special pentru ei.
              Într-o lume în care totul devine rapid și superficial, noi am ales să investim timp, suflet și pasiune în fiecare creație muzicală.
            </p>
            <p className="text-dark-text-muted leading-relaxed">
              Fondat de Mihai Gruia, producător muzical și fost membru al trupei internaționale Akcent, MusicGift combină experiența de scenă și studio cu emoția sinceră a poveștilor personale.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section with Modern Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-3xl font-bold mb-12 text-center text-dark-text dot-matrix">
            Echipa Noastră
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mihai Gruia",
                icon: <Music className="text-primary" />,
                content: "Producător muzical și compozitor, membru fondator al trupei Akcent cu hituri celebre precum 'That's My Name', 'Kylie' și 'Stay with Me'."
              },
              {
                title: "Mango Records",
                icon: <Star className="text-primary" />,
                content: "Casă de discuri independentă, cu peste 1000 de piese distribuite global pe Spotify, Apple Music și YouTube."
              },
              {
                title: "DOMG Studio",
                icon: <Award className="text-primary" />,
                content: "Studio de creație muzicală premium, cu piese compuse pentru artiști români și internaționali de top: Akcent, Andra, Lora, Alina Eremia și alții."
              },
              {
                title: "Do Music for Good Band",
                icon: <Heart className="text-primary" />,
                content: "O echipă de interpreți profesioniști care colaborează pentru a da voce melodiilor MusicGift."
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-8 hover-glow">
                <h3 className="font-mono text-2xl font-bold mb-4 text-dark-text flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <p className="text-dark-text-muted">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-mono text-3xl font-bold mb-8 text-center text-dark-text dot-matrix">
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
              <div key={index} className="glass-card flex items-start gap-3 p-6 hover-glow">
                <Music className="text-primary mt-1 flex-shrink-0" />
                <p className="text-dark-text-muted">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
