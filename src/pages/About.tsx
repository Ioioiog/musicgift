
import { Motion } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import AboutSection from "@/components/AboutSection";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Motion className="w-16 h-16 text-primary mx-auto mb-8" />
          <h1 className="font-mono text-5xl md:text-6xl font-bold text-dark-text mb-8 animate-fade-in dot-matrix">
            Despre Noi
          </h1>
          <div className="prose prose-lg mx-auto text-dark-text-muted">
            <p className="text-xl italic mb-6">
              La MusicGift transformăm emoțiile în melodii unice
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 hover-glow">
              <h2 className="text-2xl font-mono font-bold mb-4 text-dark-text dot-matrix">Misiunea Noastră</h2>
              <p className="text-dark-text-muted">
                Creăm melodii personalizate care transformă momentele speciale în amintiri muzicale de neuitat. 
                Fiecare notă este compusă cu pasiune și profesionalism pentru a reflecta povestea ta unică.
              </p>
            </Card>
            <Card className="glass-card p-8 hover-glow">
              <h2 className="text-2xl font-mono font-bold mb-4 text-dark-text dot-matrix">Viziunea Noastră</h2>
              <p className="text-dark-text-muted">
                Ne dorim să devenim vocea care dă viață emoțiilor tale prin muzică. 
                Credem că fiecare moment special merită propria sa melodie, iar noi suntem aici să o creăm.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AboutSection />
    </PageContainer>
  );
};

export default About;

