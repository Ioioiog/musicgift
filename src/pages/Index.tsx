import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";
import TrackCard from "@/components/TrackCard";
import AnimatedSteps from "@/components/AnimatedSteps";
import Header from "@/components/Header";

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

// Video testimonials
const videoTestimonials = [{
  id: 1,
  title: "Andreea & Mihai",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  quote: "O melodie care ne reprezintă perfect!"
}, {
  id: 2,
  title: "Elena & Victor",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  quote: "Ne-am îndrăgostit de melodie din prima secundă"
}, {
  id: 3,
  title: "Maria & Alexandru",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  quote: "Cel mai special cadou pe care l-am primit vreodată"
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
      {/* Hero Section */}
      <Header />

      {/* Featured Music Player Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
            <div>
              <h2 className="font-mono font-bold mb-2 tracking-tight dot-matrix text-6xl">Ascultă Demo</h2>
              <p className="text-dark-text-muted">Exemple de creații muzicale MusicGift</p>
            </div>
            
            <Button variant="ghost" onClick={handleOrderClick} className="mt-4 md:mt-0 text-orange-500">
              Creează propria melodie
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <MusicPlayer tracks={demoTracks} className="mb-16" />
          
          <h2 className="font-mono font-bold mb-8 tracking-tight dot-matrix text-3xl">Creații Recente</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featuredReleases.map(track => <TrackCard key={track.id} id={track.id} title={track.title} artist={track.artist} onPlay={() => handlePlayTrack(track.id)} />)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 bg-dark-card my-0 py-[10px]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold mb-10 text-center tracking-tight dot-matrix text-6xl mx-0 px-[18px] my-[28px] py-[15px]">
            Cum funcționează MusicGift?
          </h2>
          <AnimatedSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-mono font-bold mb-10 text-center tracking-tight dot-matrix text-4xl">
            Ce spun cei care au ales MusicGift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-6 rounded-xl transition-transform duration-300 hover:scale-105">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={testimonial.videoUrl}
                    title={testimonial.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{testimonial.title}</h3>
                <p className="italic text-dark-text-muted">{testimonial.quote}</p>
              </div>
            ))}
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
