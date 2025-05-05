
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface FounderMessageStepProps {
  packageName: string;
  onContinue: () => void;
}

export default function FounderMessageStep({ packageName, onContinue }: FounderMessageStepProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">🎉 Felicitări! Ai ales pachetul <span className="text-primary">{packageName}</span></h2>
        <p className="opacity-90">Ești cu un pas mai aproape de o melodie unică.</p>
      </div>
      
      <div className="rounded-xl overflow-hidden">
        <video 
          className="w-full aspect-video object-cover"
          controls
          poster="/placeholder.svg"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
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
              <p>🎵 Piesa: <span className="font-medium">'Mereu împreună'</span></p>
              <p>📄 Poveste: Dragoste la distanță, regăsire, dor</p>
              <p>🎧 Livrată pe WhatsApp + video animat</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
              <p className="italic">
                "Am plâns și am ascultat-o de 10 ori în prima zi. MAGIE!"
              </p>
              <p className="text-right font-medium mt-2">— Ana, București</p>
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
