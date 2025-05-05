
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ThankYou = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const { toast } = useToast();
  const isGiftCard = location.state?.isGiftCard || false;
  const recipientEmail = location.state?.recipientEmail || '';
  const giftCode = location.state?.giftCode || '';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(giftCode);
    toast({
      title: "Cod copiat!",
      description: "Codul cadou a fost copiat în clipboard.",
    });
  };

  return (
    <div className={cn(
      "min-h-screen py-20",
      theme === 'dark' ? 'bg-gradient-to-br from-black via-black to-black' : 'bg-gradient-to-br from-white via-white to-white'
    )}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center",
              theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
            )}>
              {isGiftCard ? (
                <CreditCard className="h-10 w-10 text-primary" />
              ) : (
                <Check className="h-10 w-10 text-primary" />
              )}
            </div>
          </div>

          <h1 className={cn(
            "text-4xl font-playfair font-bold mb-4",
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            {isGiftCard ? "Card Cadou Creat cu Succes!" : "Mulțumim pentru Comanda Ta!"}
          </h1>

          <p className={cn(
            "text-lg mb-8",
            theme === 'dark' ? 'text-white' : 'text-gray-700'
          )}>
            {isGiftCard 
              ? `Am trimis un email la adresa ${recipientEmail} cu detaliile cardului cadou.`
              : "Am primit comanda ta și te vom contacta în curând pentru confirmare."}
          </p>

          {isGiftCard && giftCode && (
            <div className={cn(
              "p-6 rounded-lg mb-10",
              theme === 'dark' ? 'bg-black/40 border border-border/50' : 'bg-gray-50 border border-gray-200'
            )}>
              <p className={cn(
                "text-sm mb-2",
                theme === 'dark' ? 'text-white/70' : 'text-gray-500'
              )}>
                Codul cadou:
              </p>
              <div className="flex items-center justify-center gap-3">
                <code className={cn(
                  "text-xl font-mono px-4 py-2 rounded",
                  theme === 'dark' ? 'bg-black/70 text-primary border border-primary/30' : 'bg-white text-primary border border-primary/20'
                )}>
                  {giftCode}
                </code>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={cn(
                    "flex items-center gap-1",
                    theme === 'dark' ? 'border-border/50 text-white hover:bg-black/50' : 'text-black hover:bg-gray-100'
                  )} 
                  onClick={handleCopyCode}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiază</span>
                </Button>
              </div>
              <p className={cn(
                "text-sm mt-4",
                theme === 'dark' ? 'text-white/70' : 'text-gray-500'
              )}>
                Destinatarul poate folosi acest cod la finalizarea comenzii pentru a aplica valoarea cardului cadou.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Link to="/">
              <Button className={cn(
                "bg-primary hover:bg-primary/90 text-white",
                "px-6 py-2 rounded-md"
              )}>
                Înapoi la pagina principală
              </Button>
            </Link>
            
            <div className={cn(
              "mt-12 pt-8 border-t",
              theme === 'dark' ? 'border-border/30' : 'border-gray-200'
            )}>
              <h3 className={cn(
                "text-xl font-medium mb-4",
                theme === 'dark' ? 'text-white' : 'text-black'
              )}>
                Ai întrebări sau nelămuriri?
              </h3>
              <p className={cn(
                "mb-4",
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              )}>
                Nu ezita să ne contactezi la <a href="mailto:contact@musicgift.ro" className="text-primary hover:underline">contact@musicgift.ro</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
