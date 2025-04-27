import { Gift, Briefcase, Star, Mic, Music, Video, ArrowRight, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/comanda");
  };

  const packages = [
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Pachet Personal",
      price: "300 RON",
      description: "Pentru cei care vor să transforme o poveste personală într-un cadou unic",
      features: [
        "Melodie compusă de la zero după povestea ta",
        "Voce profesionistă din echipa MusicGift",
        "Livrare rapidă în 3-5 zile",
        "Drept de utilizare personală (fără scop comercial)"
      ],
      slogan: "Un cântec doar pentru tine și cei dragi."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Pachet Business",
      price: "900 RON",
      description: "Pentru firme și branduri care vor o melodie originală",
      features: [
        "Melodie compusă special pentru afacerea ta",
        "Voce profesionistă și producție premium",
        "Drept de utilizare comercială limitată",
        "Posibilitatea de a adăuga 100% drepturi printr-un upgrade"
      ],
      slogan: "Dă-i afacerii tale vocea pe care o merită."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Pachet Premium",
      price: "1.000 RON",
      description: "Pentru cei care își doresc o lansare completă",
      features: [
        "Melodie compusă special + producție completă",
        "Videoclip simplu standard (Do Music for Good Band animated)",
        "Distribuție oficială în rețeaua Mango Records",
        "Drept de utilizare comercială extinsă"
      ],
      slogan: "Creează impact. Lasă muzica să vorbească pentru tine."
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Pachet Artist",
      price: "8.000 RON",
      description: "Pentru artiști serioși care vor o piesă originală de top",
      features: [
        "Melodie compusă + instrumental profesionist",
        "Ghid vocal + suprapunerea vocii tale în studio",
        "Co-proprietate 50/50 asupra masterului",
        "Distribuție prin Mango Records pe toate platformele majore"
      ],
      slogan: "Primul pas spre cariera ta muzicală începe aici."
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Pachet Instrumental",
      price: "500 RON",
      description: "Pentru artiști care doresc instrumentale profesionale",
      features: [
        "Instrumental original creat de echipa MusicGift",
        "Compoziție completă: beat, armonii și structura piesei",
        "Fără voce (vocea este lăsată la alegerea artistului)",
        "Fișier de înaltă calitate (WAV sau MP3)"
      ],
      slogan: "Creează piesa ta cu un instrumental premium."
    }
  ];

  const addOns = [
    {
      icon: <Video className="w-6 h-6 text-primary" />,
      title: "Videoclip personalizat",
      description: "Din imagini/filmări proprii",
      price: "149 RON"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Full ownership pentru pachet Business",
      description: "Disponibil doar la cerere, după validarea materialelor",
      price: "5.000 RON"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Package className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce-slow" />
            <h1 className="text-3xl md:text-4xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent mb-4">
              Pachete și Prețuri
            </h1>
            <p className="text-base md:text-lg text-dark-text-muted mb-6">
              Alege pachetul perfect pentru povestea ta muzicală. Fiecare melodie este creată special pentru tine.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="glass-card hover:translate-y-[-4px] transition-all duration-300 border-dark-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {pkg.icon}
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {pkg.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-playfair text-dark-text mb-2">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-dark-text-muted">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-dark-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4 pt-6">
                  <p className="text-sm italic text-dark-text-muted text-center">{pkg.slogan}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium"
                    onClick={handleOrderClick}
                  >
                    Alege acest pachet
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-dark-text">
            Servicii Adiționale
          </h2>
          <div className="grid gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={index} 
                className="glass-card hover:translate-y-[-2px] transition-all duration-300 border-dark-border/50"
              >
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    {addon.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-dark-text mb-1">{addon.title}</h3>
                    <p className="text-dark-text-muted text-sm">{addon.description}</p>
                  </div>
                  <Badge variant="secondary" className="text-lg bg-primary/10 text-primary">
                    {addon.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-dark-text">
            Pregătit să-ți transformi povestea în muzică?
          </h2>
          <p className="text-lg text-dark-text-muted mb-8">
            Alege pachetul potrivit și începe călătoria ta muzicală astăzi!
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg font-medium"
            onClick={handleOrderClick}
          >
            <span>Începe Acum</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
