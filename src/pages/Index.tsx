
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-4 text-center bg-gradient-to-b from-white via-light-purple to-white">
        <div className="container max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary leading-tight animate-fade-in">
            Transformă Emoțiile Tale<br />în Muzică
          </h1>
          <p className="mt-6 text-xl text-gray-600 animate-fade-in delay-100 max-w-2xl mx-auto">
            Cel mai frumos cadou: o melodie creată special pentru cineva drag. 
            <span className="block mt-2 text-lg">
              Creat de o echipă de artiști profesioniști, sub îndrumarea lui Mihai Gruia – producător, ex-membru Akcent.
            </span>
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-full animate-fade-in delay-200">
            Comandă Melodia Ta
          </Button>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works */}
      <section className="py-20 px-4 bg-light-purple">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 text-center text-secondary">
            Cum funcționează MusicGift?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Completează un scurt formular cu povestea ta",
              "Alege pachetul potrivit pentru tine",
              "Echipa MusicGift compune și înregistrează melodia ta",
              "Primești melodia ta unică în doar câteva zile!"
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 text-center text-secondary">
            Ce spun cei care au ales MusicGift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Cadoul perfect! Soția mea a plâns de emoție când a ascultat melodia.",
                author: "Andrei, București"
              },
              {
                quote: "Am primit exact ceea ce mi-am dorit. Profesionalism și suflet în fiecare notă.",
                author: "Laura, Cluj"
              },
              {
                quote: "O experiență magică. Recomand din toată inima!",
                author: "Robert, Constanța"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-light-purple p-8 rounded-xl text-center">
                <p className="italic mb-4 text-gray-700">{testimonial.quote}</p>
                <p className="font-semibold text-secondary">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-light-purple to-white text-center">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Găsește-ți povestea în muzică
          </h2>
          <Button size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg rounded-full">
            Comandă Melodia Ta Acum
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
