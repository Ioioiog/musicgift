
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
      title: "2. Ce tipuri de cookie-uri folosim?",
      content: "Pe site-ul MusicGift.ro utilizăm următoarele tipuri de cookie-uri:\n\n- Cookie-uri esențiale: necesare pentru funcționarea corectă a site-ului\n- Cookie-uri de analiză: pentru a înțelege cum este utilizat site-ul nostru\n- Cookie-uri de marketing: pentru a vă oferi experiențe personalizate și relevante\n- Cookie-uri de preferințe: pentru a memora alegerile dumneavoastră pe site"
    },
    {
      title: "3. Cum controlăm cookie-urile?",
      content: "Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe dispozitivul dumneavoastră și puteți seta majoritatea browserelor să blocheze plasarea acestora. Dacă faceți acest lucru, este posibil să fie necesar să setați manual unele preferințe."
    },
    {
      title: "4. Consimțământ pentru utilizarea cookie-urilor",
      content: "Când accesați pentru prima dată site-ul nostru, veți fi întrebat dacă acceptați utilizarea cookie-urilor. Puteți alege să acceptați toate cookie-urile, să le respingeți pe toate sau să le gestionați conform preferințelor dumneavoastră."
    },
    {
      title: "5. Modificări ale Politicii de Cookies",
      content: "Ne rezervăm dreptul de a modifica această Politică de Cookies în orice moment. Orice modificări vor fi publicate pe această pagină și, dacă modificările sunt semnificative, vom furniza o notificare mai vizibilă."
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

      {/* Content Section */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
          <ScrollArea className="h-[600px] pr-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-playfair font-semibold text-secondary mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
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
