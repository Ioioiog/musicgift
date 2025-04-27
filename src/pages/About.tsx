import { Music } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import AboutSection from "@/components/AboutSection";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img 
            src="/people-background.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent backdrop-blur-sm" />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Music className="w-8 h-8 text-primary mx-auto mb-4" />
          <h1 className="font-mono text-2xl md:text-3xl font-bold text-dark-text mb-4 animate-fade-in dot-matrix">
            Despre Noi
          </h1>
          <div className="prose prose-lg mx-auto text-dark-text-muted">
            <p className="text-base italic mb-4">
              La MusicGift transformăm emoțiile în melodii unice
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 hover-glow">
              <h2 className="text-lg font-mono font-bold mb-3 text-dark-text dot-matrix">Misiunea Noastră</h2>
              <p className="text-dark-text-muted text-sm">
                Creăm melodii personalizate care transformă momentele speciale în amintiri muzicale de neuitat. 
                Fiecare notă este compusă cu pasiune și profesionalism pentru a reflecta povestea ta unică.
              </p>
            </Card>
            <Card className="glass-card p-6 hover-glow">
              <h2 className="text-lg font-mono font-bold mb-3 text-dark-text dot-matrix">Viziunea Noastră</h2>
              <p className="text-dark-text-muted text-sm">
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
