
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Gift, Mail, Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const giftCardSchema = z.object({
  recipientName: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  recipientEmail: z.string().email("Email invalid"),
  senderName: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  message: z.string().optional(),
  packageType: z.string().min(1, "Te rugăm să alegi un pachet"),
  amount: z.string().min(1, "Te rugăm să alegi sau să introduci valoarea cardului cadou"),
});

type GiftCardFormValues = z.infer<typeof giftCardSchema>;

const GiftCard = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isCustomValue, setIsCustomValue] = useState(false);

  const form = useForm<GiftCardFormValues>({
    resolver: zodResolver(giftCardSchema),
    defaultValues: {
      recipientName: "",
      recipientEmail: "",
      senderName: "",
      message: "",
      packageType: "",
      amount: "",
    },
  });

  const onSubmit = (data: GiftCardFormValues) => {
    // Generate a unique gift code (in real implementation, this would come from the backend)
    const giftCode = `MG-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    
    console.log({ ...data, giftCode });
    
    toast({
      title: "Card cadou creat cu succes!",
      description: `Un email a fost trimis către ${data.recipientEmail} cu codul cadou: ${giftCode}`,
    });
    
    // Redirect to thank you page after a short delay
    setTimeout(() => {
      navigate("/multumire", { 
        state: { 
          isGiftCard: true, 
          recipientEmail: data.recipientEmail,
          giftCode
        } 
      });
    }, 2000);
  };

  const handlePackageChange = (value: string) => {
    if (value === "Personal") {
      form.setValue("amount", "300");
      setIsCustomValue(false);
    } else if (value === "Business") {
      form.setValue("amount", "900");
      setIsCustomValue(false);
    } else if (value === "Premium") {
      form.setValue("amount", "1000");
      setIsCustomValue(false);
    } else if (value === "Artist") {
      form.setValue("amount", "8000");
      setIsCustomValue(false);
    } else if (value === "Instrumental") {
      form.setValue("amount", "500");
      setIsCustomValue(false);
    } else if (value === "Custom") {
      form.setValue("amount", "");
      setIsCustomValue(true);
    }
    form.setValue("packageType", value);
  };

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gradient-to-br from-black via-black to-black' : 'bg-gradient-to-br from-white via-white to-white'
    )}>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className={cn(
                "p-3 rounded-full",
                theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
              )}>
                <CreditCard className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-h1 font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent mb-4">
              Creează un Card Cadou
            </h1>
            <p className={cn(
              "text-body mb-6",
              theme === 'dark' ? 'text-white' : 'text-gray-700'
            )}>
              Oferă un cadou muzical unic pentru o persoană specială
            </p>
          </section>

          {/* Gift Card Form */}
          <Card className={cn(
            theme === 'dark' ? 'border-dark-border/50 bg-black/50 backdrop-blur-sm border border-border/50' : 'bg-white border border-gray-200/50 shadow-sm'
          )}>
            <CardHeader>
              <CardTitle className={theme === 'dark' ? 'text-white' : 'text-black'}>Detalii Card Cadou</CardTitle>
              <CardDescription className={theme === 'dark' ? 'text-white/70' : 'text-gray-500'}>
                Completează informațiile pentru a crea un card cadou personalizat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="recipientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>Numele destinatarului*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ion Popescu" 
                                {...field} 
                                className={theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="recipientEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>Email-ul destinatarului*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="destinatar@exemplu.com" 
                                type="email" 
                                {...field} 
                                className={theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="senderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>Numele expeditorului*</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Maria Ionescu" 
                              {...field} 
                              className={theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="packageType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>Alege pachetul*</FormLabel>
                          <Select onValueChange={handlePackageChange}>
                            <FormControl>
                              <SelectTrigger 
                                className={theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'}
                              >
                                <SelectValue placeholder="Selectează pachetul" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className={theme === 'dark' ? 'bg-black border-border' : 'bg-white'}>
                              <SelectItem value="Personal">Personal (300 RON)</SelectItem>
                              <SelectItem value="Business">Business (900 RON)</SelectItem>
                              <SelectItem value="Premium">Premium (1.000 RON)</SelectItem>
                              <SelectItem value="Artist">Artist (8.000 RON)</SelectItem>
                              <SelectItem value="Instrumental">Instrumental (500 RON)</SelectItem>
                              <SelectItem value="Custom">Valoare personalizată</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>
                            {isCustomValue ? "Valoarea cardului cadou (RON)*" : "Valoare"}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="text" 
                              disabled={!isCustomValue}
                              {...field} 
                              className={theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'} 
                            />
                          </FormControl>
                          {isCustomValue && (
                            <FormDescription className={theme === 'dark' ? 'text-white/70' : 'text-gray-500'}>
                              Introdu suma dorită în RON
                            </FormDescription>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={theme === 'dark' ? 'text-white' : 'text-black'}>Mesaj personalizat (opțional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Adaugă un mesaj personal pentru destinatar..." 
                              className={cn(
                                "min-h-[120px] resize-none",
                                theme === 'dark' ? 'bg-black/50 border-border/50 text-white' : 'bg-white text-black'
                              )} 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                    disabled={!form.formState.isValid}
                  >
                    <Send className="w-5 h-5 mr-2" /> 
                    Trimite card cadou
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Gift Card Info */}
          <div className="mt-10 text-center">
            <h3 className={cn(
              "text-xl font-medium mb-4",
              theme === 'dark' ? 'text-white' : 'text-black'
            )}>
              Cum funcționează
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "p-3 rounded-full mb-3",
                  theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
                )}>
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Alegi pachetul și valoarea</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "p-3 rounded-full mb-3",
                  theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
                )}>
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Destinatarul primește codul prin email</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "p-3 rounded-full mb-3",
                  theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
                )}>
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Codul este folosit la checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
