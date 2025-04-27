
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Terms = () => {
  const sections = [
    {
      title: "1. Preambul",
      content: "MusicGift este un serviciu operat de SC MANGO RECORDS SRL, societate română cu sediul social în Oraș Otopeni, Strada Maramureș, Nr. 18, Ap. 13, Județ Ilfov, înregistrată la Registrul Comerțului sub nr. J23/2828/2017, având codul de identificare fiscală RO29228083.\n\nPrin plasarea unei comenzi pe MusicGift.ro, acceptați în mod expres termenii și condițiile prezentate mai jos."
    },
    {
      title: "2. Definiții",
      content: "- MusicGift: serviciul de creație muzicală personalizată, oferit de Mango Records prin website-ul MusicGift.ro.\n- Client: persoana fizică sau juridică care comandă un serviciu MusicGift.\n- Melodie: înregistrarea audio finală livrată către client în baza comenzii plasate.\n- Master: fișierul audio final rezultat din procesul de producție.\n- Compoziție: linia melodică, armonia și textul piesei."
    },
    {
      title: "3. Descrierea Serviciilor",
      content: "MusicGift oferă crearea de melodii personalizate pentru uz personal, comercial sau artistic, în baza informațiilor furnizate de client."
    },
    // ... add all other sections similarly
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
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
            Termeni și Condiții
          </h1>
          <p className="text-lg text-gray-700">
            Vă rugăm să citiți cu atenție termenii și condițiile de utilizare a serviciilor noastre.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
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

export default Terms;
