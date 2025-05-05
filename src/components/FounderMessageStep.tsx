
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Package } from '@/components/PackageCard';

interface FounderMessageStepProps {
  selectedPackage: Package;
  onContinue: () => void;
}

// Content for different packages
const packagesContent = {
  1: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "Am plâns și am ascultat-o de 10 ori în prima zi. MAGIE!",
    client: "Ana, București",
    songName: "Mereu împreună",
    songStory: "Dragoste la distanță, regăsire, dor",
    delivery: "Livrată pe WhatsApp + video animat"
  },
  2: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "Exact ce aveam nevoie pentru videoclipul meu! Melodia a făcut tot contentul să strălucească!",
    client: "Mihai, Cluj",
    songName: "Călătorie prin vise",
    songStory: "Vlogging, aventură, inspirație",
    delivery: "Livrat pe email + drepturi comerciale"
  },
  3: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "Reclamele noastre au acum un sunet unic și recognoscibil. Feedback super pozitiv!",
    client: "Firma X, București",
    songName: "Inovație",
    songStory: "Brand modern, tehnologie, încredere",
    delivery: "Livrat pentru uz comercial limitat"
  },
  4: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "Melodia a ajuns pe radio local și am primit atâtea complimente!",
    client: "Elena, Iași",
    songName: "Zbor în libertate",
    songStory: "Lansare produs, campanie socială",
    delivery: "Format broadcast-ready + YouTube"
  },
  5: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "A fost o experiență incredibilă să co-creez această piesă. Simt că e și a mea acum.",
    client: "Alex, Timișoara",
    songName: "Drumul nostru",
    songStory: "Colaborare creativă, mesaj personal",
    delivery: "Producție comună, drepturi partajate"
  },
  6: {
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    testimonial: "Am cumpărat drepturile exclusive pentru un proiect major și merită fiecare bănuț!",
    client: "Studio Media, București",
    songName: "Esența",
    songStory: "Proiect de anvergură, exclusivitate",
    delivery: "Livrare completă cu master și toate drepturile"
  }
};

export default function FounderMessageStep({ selectedPackage, onContinue }: FounderMessageStepProps) {
  const { theme } = useTheme();
  
  // Get content based on selected package ID
  const content = packagesContent[selectedPackage.id as keyof typeof packagesContent] || packagesContent[1];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">🎉 Felicitări! Ai ales pachetul <span className="text-primary">{selectedPackage.name}</span></h2>
        <p className="opacity-90">Ești cu un pas mai aproape de o melodie unică.</p>
      </div>
      
      <div className="rounded-xl overflow-hidden">
        <video 
          className="w-full aspect-video object-cover"
          controls
          poster="/placeholder.svg"
        >
          <source src={content.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <p className="text-center font-medium">👇 Uite un exemplu de piesă creată cu acest pachet și reacția clientului:</p>
      
      <Card className={cn(
        "border",
        theme === 'dark' ? 'bg-black/30 border-border/50' : 'bg-white'
      )}>
        <CardContent className="p-4 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p>🎵 Piesa: <span className="font-medium">'{content.songName}'</span></p>
              <p>📄 Poveste: {content.songStory}</p>
              <p>🎧 {content.delivery}</p>
            </div>
            <div className={cn(
              "p-3 rounded-lg border", 
              theme === 'dark' 
                ? "bg-primary/10 border-primary/30" 
                : "bg-primary/5 border-primary/20"
            )}>
              <p className="italic">
                "{content.testimonial}"
              </p>
              <p className="text-right font-medium mt-2">— {content.client}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center pt-4">
        <p className="text-lg font-medium text-primary mb-6">❤️ Abia așteptăm să creăm ceva unic și pentru tine!</p>
        
        <Button 
          onClick={onContinue} 
          className="bg-primary hover:bg-primary/90 px-8 py-6 h-auto text-lg"
        >
          Continuă
        </Button>
      </div>
    </motion.div>
  );
}
