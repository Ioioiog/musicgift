import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Send, Music, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  email: z.string().email("Email invalid"),
  phone: z.string().optional(),
  package: z.enum(["Personal", "Business", "Premium", "Artist"]),
  story: z.string().min(10, "Vă rugăm să oferiți mai multe detalii despre povestea dumneavoastră"),
  addons: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Trebuie să acceptați termenii și condițiile",
  }),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Trebuie să acceptați politica de confidențialitate",
  }),
  marketingAccepted: z.boolean().optional(),
});

const Order = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addons: [],
      termsAccepted: false,
      privacyAccepted: false,
      marketingAccepted: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Comandă trimisă cu succes!",
      description: "Vă vom contacta în curând pentru confirmare.",
    });
    navigate("/multumire");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] py-16 px-4">
      {/* Hero Section */}
      <section className="relative z-10 mb-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10 animate-bounce-slow">
              <Music className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent mb-4">
            Transformă Povestea Ta în Muzică
          </h1>
          <p className="text-base text-dark-text-muted max-w-2xl mx-auto">
            Completează formularul și lasă-ne să creăm melodia perfectă pentru momentul tău special.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10">
        <div className="container mx-auto max-w-2xl">
          <Card className="glass-card border-dark-border/50">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-text">Prenume și Nume*</FormLabel>
                          <FormControl>
                            <Input placeholder="Ion Popescu" {...field} className="bg-dark-card/50 border-dark-border/50 text-dark-text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-text">Email*</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@example.com" {...field} className="bg-dark-card/50 border-dark-border/50 text-dark-text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-text">Telefon (opțional)</FormLabel>
                        <FormControl>
                          <Input placeholder="0712345678" {...field} className="bg-dark-card/50 border-dark-border/50 text-dark-text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-text">Alege Pachetul*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-dark-card/50 border-dark-border/50 text-dark-text">
                              <SelectValue placeholder="Selectează pachetul dorit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-dark-card border-dark-border">
                            <SelectItem value="Personal">Personal (300 RON)</SelectItem>
                            <SelectItem value="Business">Business (900 RON)</SelectItem>
                            <SelectItem value="Premium">Premium (1.000 RON)</SelectItem>
                            <SelectItem value="Artist">Artist (8.000 RON)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="story"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-text">Povestea ta*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrie pentru cine este melodia, ocazia, idei de emoții..."
                            className="min-h-[150px] bg-dark-card/50 border-dark-border/50 text-dark-text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-dark-border/50 data-[state=checked]:bg-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-dark-text">
                              Sunt de acord cu <a href="/termeni" className="text-primary hover:underline">Termenii și Condițiile</a> MusicGift*
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyAccepted"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-dark-border/50 data-[state=checked]:bg-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-dark-text">
                              Sunt de acord cu <a href="/confidentialitate" className="text-primary hover:underline">Politica de Confidențialitate</a>*
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="marketingAccepted"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-dark-border/50 data-[state=checked]:bg-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-dark-text">
                              Sunt de acord să primesc comunicări comerciale
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                    >
                      <Send className="mr-2 h-5 w-5" /> Trimite Comanda
                    </Button>
                    <p className="mt-4 text-sm text-dark-text-muted text-center">
                      Mulțumim că ai ales să creezi emoție alături de noi! 🎶
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Order;
