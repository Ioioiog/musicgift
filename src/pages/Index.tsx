
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Music, Star, Heart } from "lucide-react";
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
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - Clean and Modern */}
      <section className="relative bg-gradient-to-br from-purple-50 to-yellow-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Give the Gift of <span className="text-purple-600">Music</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Emoție. Poveste. Muzică creată doar pentru tine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={handleOrderClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Music className="mr-2 h-5 w-5" />
                  Comandă Acum
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg rounded-full"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ascultă Demo
                </Button>
              </div>
            </div>
            
            {/* Right side - 3D Illustration placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-200 to-yellow-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Music className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-700 font-semibold">🎁 Musical Gift Box</p>
                    <p className="text-sm text-gray-500 mt-2">Personalized Songs</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  ♪
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De ce să alegi MusicGift?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creăm melodii personalizate care captează perfect emoțiile și momentele tale speciale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">Complet Personalizat</h3>
              <p className="text-gray-600">Fiecare melodie este creată unic pentru tine, reflectând povestea și emoțiile tale</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">Calitate Profesională</h3>
              <p className="text-gray-600">Muzicieni și producători profesioniști creează melodii de înaltă calitate</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">Cadoul Perfect</h3>
              <p className="text-gray-600">Un cadou unic și emoționant pentru orice ocazie specială din viața ta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ascultă Exemplele Noastre
            </h2>
            <p className="text-xl text-gray-600">
              Descoperă magia melodiilor personalizate MusicGift
            </p>
          </div>
          
          <MusicPlayer tracks={demoTracks} className="mb-16" />
          
          <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-8 text-center">
            Creații Recente
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featuredReleases.map(track => (
              <TrackCard 
                key={track.id} 
                id={track.id} 
                title={track.title} 
                artist={track.artist} 
                onPlay={() => handlePlayTrack(track.id)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cum funcționează MusicGift?
            </h2>
            <p className="text-xl text-gray-600">
              Un proces simplu pentru o melodie extraordinară
            </p>
          </div>
          <AnimatedSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-purple-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce spun cei care au ales MusicGift
            </h2>
            <p className="text-xl text-gray-600">
              Poveștile lor de succes cu melodiile personalizate
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src={testimonial.videoUrl}
                    title={testimonial.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{testimonial.title}</h3>
                <p className="italic text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-yellow-500 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Găsește-ți povestea în muzică
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Începe călătoria către melodia ta personalizată astăzi
          </p>
          <Button 
            size="lg" 
            onClick={handleOrderClick} 
            className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Music className="mr-2 h-6 w-6" />
            Comandă Melodia Ta Acum
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
