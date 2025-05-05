
import { Gift, Briefcase, Star, Mic, Music, ArrowRight, Package, Check, X, LayoutGrid, LayoutList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const Packages = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  const handleOrderClick = () => {
    navigate("/comanda");
  };
  
  const packages = [{
    icon: <Gift className="w-8 h-8 text-primary" />,
    title: "Pachet Personal",
    price: "300 RON",
    description: "Pentru cei care vor să transforme o poveste personală într-un cadou unic",
    features: ["Melodie compusă de la zero după povestea ta", "Voce profesionistă din echipa MusicGift", "Livrare rapidă în 3-5 zile", "Drept de utilizare personală (fără scop comercial)"],
    slogan: "Un cântec doar pentru tine și cei dragi.",
    license: "Personal",
    ownership: "MusicGift Studio",
    useCase: "Cadou personal, dedicație",
    distribution: "Link privat pentru descărcare"
  }, {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Pachet Business",
    price: "900 RON",
    description: "Pentru firme și branduri care vor o melodie originală",
    features: ["Melodie compusă special pentru afacerea ta", "Voce profesionistă și producție premium", "Drept de utilizare comercială limitată", "Posibilitatea de a adăuga 100% drepturi printr-un upgrade"],
    slogan: "Dă-i afacerii tale vocea pe care o merită.",
    license: "Comercial limitat",
    ownership: "Partajat cu MusicGift",
    useCase: "Brand, social media, eveniment corporativ",
    distribution: "Fișiere de înaltă calitate + link de descărcare"
  }, {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Pachet Premium",
    price: "1.000 RON",
    description: "Pentru cei care își doresc o lansare completă",
    features: ["Melodie compusă special + producție completă", "Videoclip simplu standard (Do Music for Good Band animated)", "Distribuție oficială în rețeaua Mango Records", "Drept de utilizare comercială extinsă"],
    slogan: "Creează impact. Lasă muzica să vorbească pentru tine.",
    license: "Comercial extins",
    ownership: "Partajat cu MusicGift",
    useCase: "Campanii publicitare, evenimente, platforme streaming",
    distribution: "Distribuție oficială pe platforme de streaming"
  }, {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Pachet Artist",
    price: "8.000 RON",
    description: "Pentru artiști serioși care vor o piesă originală de top",
    features: ["Melodie compusă + instrumental profesionist", "Ghid vocal + suprapunerea vocii tale în studio", "Co-proprietate 50/50 asupra masterului", "Distribuție prin Mango Records pe toate platformele majore"],
    slogan: "Primul pas spre cariera ta muzicală începe aici.",
    license: "Comercial complet",
    ownership: "Co-proprietate 50/50",
    useCase: "Lansare artistică, carieră muzicală",
    distribution: "Distribuție profesională pe toate platformele"
  }, {
    icon: <Music className="w-8 h-8 text-primary" />,
    title: "Pachet Instrumental",
    price: "500 RON",
    description: "Pentru artiști care doresc instrumentale profesionale",
    features: ["Instrumental original creat de echipa MusicGift", "Compoziție completă: beat, armonii și structura piesei", "Fără voce (vocea este lăsată la alegerea artistului)", "Fișier de înaltă calitate (WAV sau MP3)"],
    slogan: "Creează piesa ta cu un instrumental premium.",
    license: "Licență non-exclusivă",
    ownership: "MusicGift Studio",
    useCase: "Producție muzicală independentă",
    distribution: "Livrare digitală directă"
  }];

  const comparisonCategories = [
    { key: "license", label: "Tip Licență" },
    { key: "ownership", label: "Drepturi de Autor" },
    { key: "useCase", label: "Utilizare" },
    { key: "distribution", label: "Distribuție" }
  ];

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gradient-to-br from-black via-black to-black' : 'bg-gradient-to-br from-white via-white to-white'
    )}>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Package className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce-slow" />
            <h1 className="text-h1 font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent mb-4">
              Pachete și Prețuri
            </h1>
            <p className="text-body mb-6">
              Alege pachetul perfect pentru povestea ta muzicală. Fiecare melodie este creată special pentru tine.
            </p>
            
            {/* View toggle */}
            <div className="flex items-center justify-center space-x-4 mt-8 mb-8">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className={cn(
                  "rounded-full",
                  theme === 'dark' 
                    ? 'bg-primary hover:bg-primary/80 text-white' 
                    : 'bg-primary hover:bg-primary/80 text-white',
                  viewMode !== 'grid' && 'bg-transparent hover:bg-transparent'
                )}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Vizualizare Grid
              </Button>
              <Button 
                variant={viewMode === 'table' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('table')}
                className={cn(
                  "rounded-full",
                  theme === 'dark' 
                    ? 'bg-primary hover:bg-primary/80 text-white' 
                    : 'bg-primary hover:bg-primary/80 text-white', 
                  viewMode !== 'table' && 'bg-transparent hover:bg-transparent'
                )}
              >
                <LayoutList className="w-4 h-4 mr-2" />
                Tabel Comparativ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid View */}
      {viewMode === 'grid' && (
        <section className="py-16 px-4 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "hover:translate-y-[-4px] transition-all duration-300",
                    theme === 'dark' ? 'border-dark-border/50 bg-black/50 backdrop-blur-sm border border-border/50' : 'bg-white border border-gray-200/50 shadow-sm'
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn(
                        "p-3 rounded-full",
                        theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
                      )}>
                        {pkg.icon}
                      </div>
                      <Badge variant="secondary" className={cn(
                        "py-[8px]",
                        theme === 'dark' ? 'bg-primary/10 text-primary' : 'bg-primary/5 text-primary'
                      )}>
                        {pkg.price}
                      </Badge>
                    </div>
                    <CardTitle className={cn(
                      "text-2xl font-playfair mb-2",
                      theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className={theme === 'dark' ? 'text-white' : 'text-gray-500'}>
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className={theme === 'dark' ? 'text-white' : 'text-gray-600'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col items-stretch gap-4 pt-6">
                    <p className={cn(
                      "text-sm italic text-center",
                      theme === 'dark' ? 'text-white/70' : 'text-gray-500'
                    )}>{pkg.slogan}</p>
                    <Button 
                      className={cn(
                        "w-full font-medium",
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white' 
                          : 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white'
                      )} 
                      onClick={handleOrderClick}
                    >
                      Alege acest pachet
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Comparison Table */}
      {viewMode === 'table' && (
        <section className="py-16 px-4 relative">
          <div className="container mx-auto">
            <div className="overflow-x-auto rounded-lg border border-border/50">
              <Table>
                <TableHeader className={theme === 'dark' ? 'bg-black' : 'bg-gray-50'}>
                  <TableRow className={theme === 'dark' ? 'border-border/50' : 'border-gray-200'}>
                    <TableHead className={theme === 'dark' ? 'text-white' : 'text-black'}>Pachet</TableHead>
                    {packages.map((pkg, index) => (
                      <TableHead key={index} className={theme === 'dark' ? 'text-white' : 'text-black'}>
                        <div className="flex flex-col items-center">
                          <div className={cn(
                            "p-2 rounded-full mb-2",
                            theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
                          )}>
                            {pkg.icon}
                          </div>
                          <span className="font-playfair text-lg">{pkg.title}</span>
                          <Badge className={cn(
                            "mt-1",
                            theme === 'dark' ? 'bg-primary/10 text-primary' : 'bg-primary/5 text-primary'
                          )}>
                            {pkg.price}
                          </Badge>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonCategories.map((category, catIndex) => (
                    <TableRow 
                      key={catIndex}
                      className={cn(
                        theme === 'dark' ? 'border-border/50 hover:bg-black/50' : 'border-gray-200 hover:bg-gray-50/50'
                      )}
                    >
                      <TableCell className={cn(
                        "font-medium",
                        theme === 'dark' ? 'text-white' : 'text-black'
                      )}>
                        {category.label}
                      </TableCell>
                      {packages.map((pkg, pkgIndex) => (
                        <TableCell 
                          key={pkgIndex}
                          className={theme === 'dark' ? 'text-white' : 'text-gray-700'}
                        >
                          {pkg[category.key as keyof typeof pkg] as string}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow className={theme === 'dark' ? 'border-border/50' : 'border-gray-200'}>
                    <TableCell className={cn(
                      "font-medium",
                      theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      Acțiune
                    </TableCell>
                    {packages.map((_, index) => (
                      <TableCell key={index} className="text-center">
                        <Button
                          size="sm"
                          onClick={handleOrderClick}
                          className={cn(
                            theme === 'dark' 
                              ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white' 
                              : 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white'
                          )}
                        >
                          Comandă
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className={cn(
            "text-h2 font-playfair font-bold mb-6",
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            Pregătit să-ți transformi povestea în muzică?
          </h2>
          <p className={cn(
            "text-body mb-8",
            theme === 'dark' ? 'text-white' : 'text-gray-700'
          )}>
            Alege pachetul potrivit și începe călătoria ta muzicală astăzi!
          </p>
          <Button 
            size="lg" 
            className={cn(
              "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg font-medium",
              theme === 'dark' ? 'text-white' : 'text-white'
            )} 
            onClick={handleOrderClick}
          >
            <span>Începe Acum</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
