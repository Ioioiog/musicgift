
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "1. Cine suntem",
      content: "Website-ul www.musicgift.ro este operat de SC MANGO RECORDS SRL, cu sediul în Oraș Otopeni, Strada Maramureș, Nr. 18, Ap. 13, Jud. Ilfov, înregistrată la Registrul Comerțului sub nr. J23/2828/2017, cod de identificare fiscală RO29228083."
    },
    {
      title: "2. Ce date colectăm",
      content: "Prin intermediul site-ului nostru, colectăm următoarele date personale:\n- Nume complet\n- Adresă de e-mail\n- Număr de telefon\n- Mesaje transmise prin formulare\n- Informații pentru personalizarea serviciilor."
    },
    {
      title: "3. Cum folosim datele personale",
      content: "Datele sunt utilizate pentru:\n- Procesarea comenzilor\n- Comunicarea privind comenzile\n- Trimiterea de informații comerciale (numai cu consimțământ explicit)."
    },
    {
      title: "4. Temeiul legal al prelucrării",
      content: "Prelucrarea datelor personale se face în baza executării unui contract și consimțământului explicit pentru marketing."
    },
    {
      title: "5. Cui transmitem datele",
      content: "Datele nu sunt vândute și nu sunt transmise către terți, cu excepția furnizorilor implicați direct în realizarea serviciilor, în condiții de confidențialitate."
    },
    {
      title: "6. Cât timp păstrăm datele",
      content: "Datele sunt păstrate maximum 5 ani de la ultima comandă sau ultimul contact ori până la retragerea consimțământului."
    },
    {
      title: "7. Drepturile utilizatorilor",
      content: "Utilizatorii beneficiază de:\n- Dreptul de acces\n- Dreptul de rectificare\n- Dreptul de ștergere\n- Dreptul de restricționare\n- Dreptul de opoziție\n- Dreptul la portabilitate."
    },
    {
      title: "8. Securitatea datelor",
      content: "MusicGift adoptă măsuri tehnice și organizatorice pentru protejarea datelor personale împotriva pierderii, utilizării greșite sau accesului neautorizat."
    },
    {
      title: "9. Modificări ale Politicii de Confidențialitate",
      content: "Această politică poate fi actualizată periodic. Modificările vor fi publicate pe această pagină."
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
            <Shield className="w-12 h-12 text-purple-600 mr-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary">
              Politica de Confidențialitate
            </h1>
          </div>
          <p className="text-lg text-gray-700">
            Ne angajăm să protejăm confidențialitatea datelor tale personale.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

export default Privacy;
