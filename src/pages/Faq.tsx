import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import PageContainer from "@/components/PageContainer";

const Faq = () => {
  const faqs = [
    {
      question: "Cât durează să primesc melodia mea?",
      answer: "Melodia ta va fi gata în 3-5 zile lucrătoare de la confirmarea comenzii și a poveștii transmise. Ne dorim ca fiecare creație să fie lucrată cu grijă și profesionalism."
    }, {
      question: "Cum primesc melodia?",
      answer: "Vei primi melodia ta personalizată prin email, într-un format de înaltă calitate (MP3 sau WAV la cerere), împreună cu licența de utilizare conform pachetului ales."
    }, {
      question: "Pot cere modificări după ce primesc melodia?",
      answer: "Deoarece fiecare melodie este compusă personalizat după povestea ta, nu oferim modificări gratuite. Dacă dorești ajustări suplimentare, acestea pot implica un cost adițional, discutat separat."
    }, {
      question: "Pot folosi melodia comercial?",
      answer: `Depinde de pachetul ales:
        - Pachet Personal → utilizare strict personală.
        - Pachet Business și Premium → utilizare comercială conform licenței.
        - Pachet Artist → co-proprietate și distribuție globală.`
    }, {
      question: "Ce se întâmplă dacă nu sunt mulțumit?",
      answer: "Lucrăm cu cea mai mare atenție pentru a reda emoția transmisă de tine. Dacă există probleme reale (ex: livrare greșită, fișier corupt etc.), le vom remedia fără costuri suplimentare."
    }, {
      question: "Pot plăti extra pentru drepturi depline?",
      answer: "Da, pentru pachetul Business, poți achiziționa un add-on de Full Ownership asupra melodiei. Scrie-ne și te vom ajuta cu toate detaliile!"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-emotion-pattern opacity-5" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-4xl md:text-5xl font-bold text-dark-text mb-6 dot-matrix bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Întrebări Frecvente
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-text-muted mb-8"
          >
            Ai întrebări despre procesul nostru creativ? Găsește răspunsurile mai jos.
          </motion.p>
        </div>
      </motion.section>

      {/* Delivery Time Alert */}
      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto max-w-4xl px-4 mb-12"
      >
        <Alert className="bg-dark-card border-dark-border hover:border-primary/50 transition-colors">
          <Clock className="h-5 w-5 text-primary animate-pulse" />
          <AlertDescription className="text-dark-text-muted ml-2">
            Timpul mediu de livrare pentru o melodie personalizată este de 3-5 zile lucrătoare.
          </AlertDescription>
        </Alert>
      </motion.section>

      {/* FAQ Accordion */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto max-w-4xl px-4 pb-20"
      >
        <Card className="p-6 glass-card backdrop-blur-sm bg-dark-card/90 border-dark-border hover:border-primary/20 transition-all duration-300">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="border-b border-dark-border/30 last:border-none">
                  <AccordionTrigger className="text-left font-playfair text-lg font-medium text-dark-text hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-text-muted whitespace-pre-line text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </Card>
      </motion.section>
    </PageContainer>
  );
};

export default Faq;
