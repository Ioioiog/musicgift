
import { type FC } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Music, Star, Award, Heart } from "lucide-react";

const AboutSection: FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center text-dark-text dot-matrix">
          Echipa Noastră
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Mihai Gruia",
              icon: <Music className="text-primary" />,
              content: "Producător muzical și compozitor, membru fondator Akcent, cu hituri internaționale precum 'That's My Name', 'Kylie'."
            },
            {
              title: "Mango Records",
              icon: <Star className="text-primary" />,
              content: "Casă de discuri independentă, cu peste 1000 de piese lansate global pe Spotify, Apple Music și YouTube."
            },
            {
              title: "DOMG Studio",
              icon: <Award className="text-primary" />,
              content: "Studio de creație muzicală pentru artiști români și internaționali de top: Akcent, Andra, Lora."
            },
            {
              title: "Do Music for Good Band",
              icon: <Heart className="text-primary" />,
              content: "Colectiv de interpreți profesioniști ce aduc la viață poveștile transformate în muzică."
            }
          ].map((item, index) => (
            <Card key={index} className="glass-card hover-glow transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <h3 className="font-mono text-xl font-bold text-dark-text">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-dark-text-muted">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

