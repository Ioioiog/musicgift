import { Music, Star, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-4 text-center bg-gradient-to-b from-white via-light-purple to-white">
        <div className="container max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary leading-tight animate-fade-in">
            Creează Emoție.<br /> Dăruiește Muzică.
          </h1>
          <p className="mt-6 text-xl text-gray-600 animate-fade-in delay-100">
            Transformăm poveștile tale în melodii reale, create de artiști profesioniști.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-full animate-fade-in delay-200">
            Comandă Melodia Ta
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[{ icon: Truck, title: "Livrare Rapidă", desc: "În 3-5 zile" },
            { icon: Music, title: "Creație Profesională", desc: "Artiști adevărați" },
            { icon: Globe, title: "Distribuție Globală", desc: "Oriunde în lume" }
          ].map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-light-purple p-4 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-light-purple">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 text-secondary">Cum Funcționează</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Îți împărtășești povestea",
              "Alegem tonul emoției",
              "Compunem melodia unică",
              "Îți livrăm cadoul perfect"
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-gray-700">
                <p className="font-semibold mb-2">Pas {index + 1}</p>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 text-center text-secondary">
            Ce Spun Clienții Noștri
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {["O melodie care ne-a emoționat până la lacrimi.",
              "Un cadou cu adevărat unic.",
              "Profesionalism de top și emoție pură!"]
            .map((quote, index) => (
              <div key={index} className="max-w-sm bg-light-purple p-6 rounded-xl text-center">
                <p className="italic mb-4">“{quote}”</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-accent fill-accent" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-light-purple to-white text-center">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Pregătit să-ți transformăm emoția în muzică?
          </h2>
          <Button size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-full">
            Comandă Acum
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
