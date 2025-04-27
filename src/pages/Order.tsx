import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Send, Upload } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-[#f3e7ff] via-white to-[#f3e7ff]">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6">
            Emoțiile tale sunt gata să devină muzică! 🎶
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Completează formularul de mai jos și echipa noastră de artiști profesioniști va începe să creeze melodia ta unică.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                text: "Verificăm detaliile tale și îți trimitem un email de confirmare.",
              },
              {
                step: 2,
                text: "Echipa MusicGift începe compoziția personalizată a melodiei tale.",
              },
              {
                step: 3,
                text: "În 3-5 zile, îți livrăm melodia finală și licența de utilizare conform pachetului ales.",
              },
              {
                step: 4,
                text: "Ne bucurăm împreună de emoția creată!",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prenume și Nume*</FormLabel>
                    <FormControl>
                      <Input placeholder="Ion Popescu" {...field} />
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
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon (opțional)</FormLabel>
                    <FormControl>
                      <Input placeholder="0712345678" {...field} />
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
                    <FormLabel>Alege Pachetul*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectează pachetul dorit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
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
                    <FormLabel>Povestea ta*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descrie pentru cine este melodia, ocazia, idei de emoții..."
                        className="min-h-[150px]"
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
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
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
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
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
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Sunt de acord să primesc comunicări comerciale
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-6 text-center">
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                  <Send className="mr-2 h-5 w-5" /> Trimite Comanda
                </Button>
                <p className="mt-4 text-sm text-gray-600">
                  Mulțumim că ai ales să creezi emoție alături de noi! 🎶
                </p>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Order;
