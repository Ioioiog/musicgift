
import { Music, Star, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-purple to-white py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in">
            Transformă Emoțiile Tale în Muzică
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
            Cel mai emoționant cadou personalizat: o melodie creată special pentru cineva drag
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full animate-fade-in">
            Comandă Melodia Ta
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-light-purple p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Livrare Rapidă</h3>
              <p className="text-gray-600">Melodia ta va fi gata în 3-5 zile</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-light-purple p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Creație Profesionistă</h3>
              <p className="text-gray-600">Artiști profesioniști la dispoziția ta</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-light-purple p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Distribuție Globală</h3>
              <p className="text-gray-600">Melodia ta, disponibilă oriunde în lume</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 bg-light-purple">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-secondary">Ce Oferim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-4">Pentru Persoane</h3>
              <p className="text-gray-600">Melodii personalizate pentru momentele speciale din viața ta</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-4">Pentru Branduri</h3>
              <p className="text-gray-600">Identitate sonoră unică pentru brandul tău</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-4">Pentru Artiști</h3>
              <p className="text-gray-600">Colaborări creative și producție muzicală</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
            Ce Spun Clienții Noștri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Am oferit părinților mei o melodie personalizată de aniversare. Nu am văzut niciodată atâtea lacrimi de fericire!",
                author: "Maria D.",
              },
              {
                text: "MusicGift a creat coloana sonoră perfectă pentru brandul nostru. Profesionalism și creativitate la superlativ!",
                author: "Alexandru M., CEO",
              },
              {
                text: "O experiență magică! Melodia creată pentru cererea în căsătorie a fost exact ce îmi doream.",
                author: "Andrei și Elena",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-light-purple p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Star className="text-accent fill-accent w-6 h-6" />
                  <Star className="text-accent fill-accent w-6 h-6" />
                  <Star className="text-accent fill-accent w-6 h-6" />
                  <Star className="text-accent fill-accent w-6 h-6" />
                  <Star className="text-accent fill-accent w-6 h-6" />
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-secondary">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-light-purple">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-secondary">
            Creează Emoție. Dăruiește Muzică.
          </h2>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full">
            Începe Acum
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
