import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageContainer from "@/components/PageContainer";

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
    {
      title: "4. Procesul de Comandă",
      content: "Pentru a comanda o melodie personalizată, clientul trebuie să parcurgă următorii pași:\n- Selectarea pachetului dorit\n- Completarea formularului de comandă cu toate detaliile necesare despre melodia dorită\n- Efectuarea plății conform modalității alese\n- Confirmarea comenzii prin email"
    },
    {
      title: "5. Proprietate Intelectuală",
      content: "Drepturile de proprietate intelectuală asupra melodiilor create prin serviciul MusicGift sunt reglementate astfel:\n- Pachet Personal: clientul primește drept de utilizare personală, necomercială\n- Pachet Business: clientul primește licență de utilizare comercială limitată\n- Pachet Premium: clientul primește licență extinsă de utilizare comercială\n- Pachet Artist: co-proprietate asupra compoziției și masterului"
    },
    {
      title: "6. Termeni de Livrare",
      content: "Timpul standard de livrare este de 3-5 zile lucrătoare de la confirmarea plății și a tuturor detaliilor necesare."
    },
    {
      title: "7. Politica de Rambursare",
      content: "În cazul în care suntem în imposibilitatea de a livra melodia conform cerințelor specificate de client, vom oferi o rambursare integrală. Nu oferim rambursări pentru nemulțumiri subiective legate de stil sau interpretare artistică."
    },
    {
      title: "8. Confidențialitate",
      content: "Toate informațiile personale furnizate de client sunt protejate conform Politicii noastre de Confidențialitate, disponibilă pe site."
    },
    {
      title: "9. Modificări ale Termenilor și Condițiilor",
      content: "Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment, cu notificarea clienților prin email sau prin afișarea vizibilă pe site."
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
    <PageContainer>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-dark-text mb-6 dot-matrix">
            Termeni și Condiții
          </h1>
          <p className="text-lg text-dark-text-muted">
            Vă rugăm să citiți cu atenție termenii și condițiile de utilizare a serviciilor noastre.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="p-6 glass-card">
          <ScrollArea className="h-[600px] pr-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-mono font-semibold text-dark-text mb-4 dot-matrix">
                  {section.title}
                </h2>
                <p className="text-dark-text-muted whitespace-pre-line">
                  {section.content}
                </p>
                {index < sections.length - 1 && (
                  <Separator className="mt-8 bg-dark-border" />
                )}
              </div>
            ))}

            {/* Company Information */}
            <div className="mt-8 p-4 glass-card">
              <h3 className="font-mono font-semibold mb-2 text-dark-text dot-matrix">Date de Contact</h3>
              <div className="space-y-1 text-dark-text-muted">
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
    </PageContainer>
  );
};

export default Terms;
