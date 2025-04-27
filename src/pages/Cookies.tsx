
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cookie } from "lucide-react";

const Cookies = () => {
  const sections = [
    {
      title: "1. Ce sunt cookie-urile?",
      content: "Cookie-urile sunt fișiere mici de text care sunt stocate pe dispozitivul dumneavoastră (computer, tabletă, telefon mobil) atunci când accesați un site web. Aceste fișiere permit site-ului să vă recunoască și să memoreze informații despre vizita dumneavoastră."
    },
    {
      title: "2. Ce cookie-uri folosim",
      content: "Pe site-ul MusicGift.ro utilizăm următoarele tipuri de cookie-uri:\n\n- Cookie-uri esențiale: necesare pentru funcționarea corectă a site-ului\n- Cookie-uri de analiză: pentru a înțelege cum este utilizat site-ul nostru\n- Cookie-uri de marketing: pentru a vă oferi experiențe personalizate și relevante\n- Cookie-uri de preferințe: pentru a memora alegerile dumneavoastră pe site"
    },
    {
      title: "3. Scopul cookie-urilor",
      content: "Utilizăm cookie-uri pentru:\n\n- A asigura funcționalitatea corectă a site-ului\n- A analiza traficul și comportamentul utilizatorilor pe site\n- A îmbunătăți experiența de navigare\n- A personaliza conținutul în funcție de preferințele dumneavoastră\n- A permite integrarea cu rețelele sociale"
    },
    {
      title: "4. Cookie-uri ale terților",
      content: "Site-ul nostru poate conține cookie-uri de la terți precum Google Analytics, Facebook, Instagram și alți furnizori de servicii. Aceste cookie-uri sunt gestionate de respectivele companii și sunt supuse propriilor lor politici de confidențialitate."
    },
    {
      title: "5. Durata de stocare",
      content: "În funcție de rolul lor, cookie-urile pot fi:\n\n- De sesiune: sunt șterse când închideți browserul\n- Persistente: rămân pe dispozitivul dumneavoastră până expiră sau sunt șterse manual"
    },
    {
      title: "6. Gestionarea cookie-urilor",
      content: "Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe dispozitivul dumneavoastră și puteți seta majoritatea browserelor să blocheze plasarea acestora. Dacă faceți acest lucru, este posibil să fie necesar să setați manual unele preferințe, de fiecare dată când vizitați site-ul, iar unele servicii și funcționalități s-ar putea să nu funcționeze."
    },
    {
      title: "7. Dezactivarea cookie-urilor",
      content: "Pentru a afla cum să gestionați cookie-urile în browserul dumneavoastră, vă rugăm să consultați secțiunea de ajutor a browserului sau să vizitați:\n\n- Chrome: https://support.google.com/chrome/answer/95647\n- Firefox: https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer\n- Safari: https://support.apple.com/guide/safari/manage-cookies-sfri11471\n- Edge: https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies"
    },
    {
      title: "8. Modificări ale Politicii de Cookies",
      content: "Ne rezervăm dreptul de a adapta Politica de Cookies ori de câte ori este necesar. Vă rugăm să verificați periodic această pagină pentru a fi la curent cu eventualele modificări."
    }
  ];

  const companyInfo = {
    email: "contact@musicgift.ro",
    website: "www.musicgift.ro",
    company: "SC MANGO RECORDS SRL",
    address: "Oraș Otopeni, Strada Maramureș, Nr. 18, Ap. 13, Jud. Ilfov",
    cui: "RO29228083",
    rc: "J23/2828/2017"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff]">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="w-12 h-12 text-purple-600 mr-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary">
              Politica de Cookies
            </h1>
          </div>
          <p className="text-lg text-gray-700">
            Informații despre modul în care utilizăm cookie-urile pe acest site.
          </p>
        </div>
      </section>

      {/* Cookies Policy Content */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
          <ScrollArea className="h-[600px] pr-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-playfair font-semibold text-secondary mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {section.content}
                </p>
                {index < sections.length - 1 && (
                  <Separator className="mt-8 bg-purple-100" />
                )}
              </div>
            ))}

            {/* Company Information */}
            <div className="mt-8 p-4 bg-purple-50/50 rounded-lg">
              <h3 className="font-playfair font-semibold mb-2">Date de Contact</h3>
              <div className="space-y-1 text-gray-700">
                <p>📧 {companyInfo.email}</p>
                <p>🌐 {companyInfo.website}</p>
                <p>🏢 Operat de: {companyInfo.company}</p>
                <p>📍 Sediu: {companyInfo.address}</p>
                <p>🧾 CUI: {companyInfo.cui} | Nr. RC: {companyInfo.rc}</p>
              </div>
            </div>
          </ScrollArea>
        </Card>
      </section>
    </div>
  );
};

export default Cookies;
