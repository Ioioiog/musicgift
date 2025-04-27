import { Gift, Briefcase, Star, Mic, Music, Video, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff]">
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6 animate-fade-in">
            Fiecare poveste merită o melodie
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Fie că vrei să surprinzi un om drag, să creezi identitatea sonoră a brandului tău, 
            sau să lansezi o piesă originală ca artist, MusicGift îți oferă soluția perfectă.
          </p>
          <p className="text-xl font-playfair text-primary mb-12">
            Alege pachetul potrivit emoției tale!
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border-purple-100">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {pkg.icon}
                    <CardTitle className="text-2xl font-playfair">{pkg.title}</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4">
                  <p className="text-sm italic text-gray-600">{pkg.slogan}</p>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white" 
                    onClick={handleOrderClick}
                  >
                    Comandă acum
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-t from-purple-50 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-secondary">
            Add-ons disponibile
          </h2>
          <div className="grid gap-6">
            {addOns.map((addon, index) => (
              <div key={index} 
                className="flex items-center gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                {addon.icon}
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-secondary mb-1">{addon.title}</h3>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
                <div className="text-xl font-bold text-primary">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-secondary">
            Emoția ta merită să devină muzică
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Alege pachetul potrivit și hai să începem împreună magia!
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8"
            onClick={handleOrderClick}
          >
            <span>Comandă Melodia Ta</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
