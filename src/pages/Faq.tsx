
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Clock } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      question: "Cât durează să primesc melodia mea?",
      answer: "Melodia ta va fi gata în 3-5 zile lucrătoare de la confirmarea comenzii și a poveștii transmise. Ne dorim ca fiecare creație să fie lucrată cu grijă și profesionalism."
    },
    {
      question: "Cum primesc melodia?",
      answer: "Vei primi melodia ta personalizată prin email, într-un format de înaltă calitate (MP3 sau WAV la cerere), împreună cu licența de utilizare conform pachetului ales."
    },
    {
      question: "Pot cere modificări după ce primesc melodia?",
      answer: "Deoarece fiecare melodie este compusă personalizat după povestea ta, nu oferim modificări gratuite. Dacă dorești ajustări suplimentare, acestea pot implica un cost adițional, discutat separat."
    },
    {
      question: "Pot folosi melodia comercial?",
      answer: `Depinde de pachetul ales:
      - Pachet Personal → utilizare strict personală.
      - Pachet Business și Premium → utilizare comercială conform licenței.
      - Pachet Artist → co-proprietate și distribuție globală.`
    },
    {
      question: "Ce se întâmplă dacă nu sunt mulțumit?",
      answer: "Lucrăm cu cea mai mare atenție pentru a reda emoția transmisă de tine. Dacă există probleme reale (ex: livrare greșită, fișier corupt etc.), le vom remedia fără costuri suplimentare."
    },
    {
      question: "Pot plăti extra pentru drepturi depline?",
      answer: "Da, pentru pachetul Business, poți achiziționa un add-on de Full Ownership asupra melodiei. Scrie-ne și te vom ajuta cu toate detaliile!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff]">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
            Întrebări Frecvente
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ai întrebări despre procesul nostru creativ? Găsește răspunsurile mai jos.
          </p>
        </div>
      </section>

      {/* Delivery Time Alert */}
      <section className="container mx-auto max-w-4xl px-4 mb-12">
        <Alert className="bg-accent/10 border-accent/20">
          <Clock className="h-5 w-5 text-accent" />
          <AlertDescription className="text-secondary ml-2">
            Timpul mediu de livrare pentru o melodie personalizată este de 3-5 zile lucrătoare.
          </AlertDescription>
        </Alert>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-100">
                <AccordionTrigger className="text-left font-playfair text-lg font-medium text-secondary hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 whitespace-pre-line text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </section>
    </div>
  );
};

export default Faq;
