import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";
import TrackCard from "@/components/TrackCard";
import AnimatedSteps from "@/components/AnimatedSteps";

// Sample tracks data
const demoTracks = [{
  id: 1,
  title: "Memories of Us",
  artist: "MusicGift Studio",
  duration: 185
}, {
  id: 2,
  title: "Forever Together",
  artist: "MusicGift Studio",
  duration: 210
}, {
  id: 3,
  title: "Our Journey",
  artist: "MusicGift Studio",
  duration: 195
}];

// Sample featured releases
const featuredReleases = [{
  id: 101,
  title: "Love Story",
  artist: "Alex & Maria"
}, {
  id: 102,
  title: "Anniversary Waltz",
  artist: "Andrei & Elena"
}, {
  id: 103,
  title: "First Sight",
  artist: "Mihai & Ana"
}, {
  id: 104,
  title: "Wedding Dance",
  artist: "Tudor & Ioana"
}, {
  id: 105,
  title: "Proposal Theme",
  artist: "Victor & Diana"
}, {
  id: 106,
  title: "Our Family",
  artist: "Gabriel & Cristina"
}];
const Index = () => {
  const navigate = useNavigate();
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const handleOrderClick = () => {
    navigate("/comanda");
  };
  const handlePlayTrack = (id: number) => {
    console.log(`Playing track ${id}`);
    setCurrentTrack(id);
    // In a real implementation, this would trigger the music player
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-dark-bg text-dark-text">
      {/* Hero Section with minimalist dot-matrix design */}
      <section className="min-h-screen px-4 flex flex-col justify-center relative overflow-hidden pt-16">
        <div className="container max-w-4xl mx-auto relative z-10">
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-dark-text leading-tight animate-fade-in tracking-tighter mb-4">
            <span className="dot-matrix">Transformă Emoțiile</span><br />
            <span className="dot-matrix">în Muzică</span>
          </h1>
          
          <p className="mt-6 text-xl text-dark-text-muted animate-fade-in delay-100 max-w-2xl">
            Cel mai frumos cadou: o melodie creată special pentru cineva drag.
            <span className="block mt-3 text-lg">
              Creat de o echipă de artiști profesioniști, sub îndrumarea lui Mihai Gruia – producător, ex-membru Akcent.
            </span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" onClick={handleOrderClick} className="text-white px-10 py-6 text-lg rounded-full animate-fade-in delay-200 animate-glow bg-orange-500 hover:bg-orange-400">
              Comandă Melodia Ta
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <Button variant="outline" size="lg" onClick={handleScrollDown} className="border border-dark-border/30 text-dark-text hover:bg-dark-card px-10 py-6 text-lg rounded-full animate-fade-in delay-300 bg-zinc-500 hover:bg-zinc-400">
              Descoperă
              <ChevronDown className="ml-2" size={18} />
            </Button>
          </div>
        </div>
        
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px] opacity-20 bg-zinc-700"></div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </section>

      {/* Featured Music Player Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
            <div>
              <h2 className="font-mono text-3xl font-bold mb-2 tracking-tight dot-matrix">Ascultă Demo</h2>
              <p className="text-dark-text-muted">Exemple de creații muzicale MusicGift</p>
            </div>
            
            <Button variant="ghost" onClick={handleOrderClick} className="mt-4 md:mt-0 text-orange-500">
              Creează propria melodie
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <MusicPlayer tracks={demoTracks} className="mb-16" />
          
          <h2 className="font-mono text-2xl font-bold mb-8 tracking-tight dot-matrix">Creații Recente</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featuredReleases.map(track => <TrackCard key={track.id} id={track.id} title={track.title} artist={track.artist} onPlay={() => handlePlayTrack(track.id)} />)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono text-3xl font-bold mb-10 text-center tracking-tight dot-matrix">
            Cum funcționează MusicGift?
          </h2>
          <AnimatedSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono text-3xl font-bold mb-10 text-center tracking-tight dot-matrix">
            Ce spun cei care au ales MusicGift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            quote: "Cadoul perfect! Soția mea a plâns de emoție când a ascultat melodia.",
            author: "Andrei, București"
          }, {
            quote: "Am primit exact ceea ce mi-am dorit. Profesionalism și suflet în fiecare notă.",
            author: "Ioana, Brașov"
          }, {
            quote: "O experiență magică. Recomand din toată inima!",
            author: "Robert, Constanța"
          }].map((testimonial, index) => <div key={index} className="glass-card p-8 text-center">
                <p className="italic mb-4 text-dark-text-muted">{testimonial.quote}</p>
                <p className="font-semibold text-orange-500">— {testimonial.author}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-dark-bg to-dark-bg/70">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6 tracking-tight dot-matrix">
            Găsește-ți povestea în muzică
          </h2>
          <Button size="lg" onClick={handleOrderClick} className="mt-4 text-white px-10 py-6 text-lg rounded-full animate-glow bg-orange-500 hover:bg-orange-400">
            Comandă Melodia Ta Acum
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;
