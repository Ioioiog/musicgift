
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "@/contexts/ThemeContext";
import PageContainer from '@/components/PageContainer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import VoiceRecorder from '@/components/VoiceRecorder';
import { useToast } from "@/hooks/use-toast";
import PackageCard, { Package } from '@/components/PackageCard';

const packages: Package[] = [
  {
    id: 1,
    name: "Personal",
    description: "🎁 Cadou muzical pentru cineva drag.",
    duration: "🎧 ~3 min",
    license: "📄 Doar uz personal",
    price: 250
  },
  {
    id: 2,
    name: "Personal + Comercial",
    description: "🎁 Cadou + drepturi comerciale (YouTube, TikTok, Spotify).",
    duration: "🎧 ~3 min",
    license: "📄 Uz personal + monetizare",
    price: 350
  },
  {
    id: 3,
    name: "Business",
    description: "💼 Sunet pentru brandul tău – reclame, prezentări.",
    duration: "🎧 ~3 min",
    license: "📄 Licență comercială limitată",
    price: 490
  },
  {
    id: 4,
    name: "Premium",
    description: "🌟 Distribuție publică + producție avansată.",
    duration: "🎧 ~4 min",
    license: "📄 Public (YouTube, TV, Spotify)",
    price: 690
  },
  {
    id: 5,
    name: "Artist",
    description: "🎤 Co-creație muzicală – împărțim versurile și vibe-ul.",
    duration: "🎧 ~4 min",
    license: "📄 Drepturi partajate 50/50",
    price: 850
  },
  {
    id: 6,
    name: "Buyout (Exclusiv)",
    description: "👑 Devii 100% proprietar al piesei, full rights.",
    duration: "🎧 ~4–5 min",
    license: "📄 Drepturi exclusive și master",
    price: 1200
  }
];

export default function Order() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(0); // Start with step 0 for package selection
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const [giftCode, setGiftCode] = useState("");
  const [giftCodeApplied, setGiftCodeApplied] = useState(false);
  const [formData, setFormData] = useState({
    selectedPackageId: 0,
    packageName: '',
    recipientType: '',
    occasion: '',
    language: 'română',
    mood: '',
    style: '',
    youtubeLink: '',
    story: '',
    keywords: ['', '', ''],
    addOns: {
      commercialRights: false,
      urgentDelivery: false,
      customMessage: false
    },
    totalPrice: 0,
    basePrice: 0,
    email: '',
    name: '',
    phone: '',
    audioMessage: {
      url: '',
      duration: 0,
      filename: ''
    }
  });

  const handlePackageSelect = (pkg: Package) => {
    setFormData({
      ...formData,
      selectedPackageId: pkg.id,
      packageName: pkg.name,
      basePrice: pkg.price,
      totalPrice: pkg.price + calculateAddOnsTotal(),
    });
    
    // Scroll to continue button with a slight delay
    setTimeout(() => {
      continueButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const calculateAddOnsTotal = () => {
    return Object.values(formData.addOns).filter(Boolean).length * 100;
  };

  const handleAddOnToggle = (key: keyof typeof formData.addOns, price: number) => {
    const updated = !formData.addOns[key];
    setFormData({
      ...formData,
      addOns: { ...formData.addOns, [key]: updated },
      totalPrice: formData.basePrice + calculateAddOnsTotal() + (updated ? price : -price)
    });
  };
  
  const handleVoiceRecordSave = (url: string, duration: number, filename: string) => {
    setFormData({
      ...formData,
      audioMessage: { url, duration, filename }
    });
    
    toast({
      title: "Mesaj vocal salvat",
      description: `Durata: ${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`,
    });
  };
  
  const handleGiftCodeApply = () => {
    if (giftCode.trim() !== "") {
      // This would normally validate the code against a database
      // For now, we'll simulate a successful application
      setGiftCodeApplied(true);
      setFormData({
        ...formData,
        totalPrice: 0 // Assume the gift card covers the full amount
      });
    }
  };

  const nextStep = () => {
    // Validate package selection before proceeding
    if (step === 0 && formData.selectedPackageId === 0) {
      toast({
        title: "Selectează un pachet",
        description: "Trebuie să alegi un pachet pentru a continua.",
        variant: "destructive"
      });
      return;
    }
    
    setStep((s) => Math.min(s + 1, 6)); // Now we have 6 steps total
  };
  
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  
  const handleSubmit = () => {
    // Here you would normally process the form data, send it to a server, etc.
    // For now, we'll just navigate to the thank you page
    navigate('/multumire');
  };

  return (
    <PageContainer>
      <div className={cn(
        "min-h-screen px-4 py-10 md:px-6 lg:px-20",
        theme === 'dark' ? 'text-white' : 'text-black'
      )}>
        <div className="max-w-3xl mx-auto">
          <h1 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 font-playfair", 
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            Comandă cântecul tău personalizat
          </h1>

          <div className="mb-6">
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-primary">Pasul {step + 1} din 6</div>
                
                {step === 4 && (
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="gift-code" className="sr-only">Cod cadou</Label>
                    <div className={cn(
                      "text-sm", 
                      giftCodeApplied ? "text-green-500" : theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      {giftCodeApplied ? "Card cadou aplicat!" : "Ai un card cadou?"}
                    </div>
                    
                    {!giftCodeApplied && (
                      <div className="flex space-x-2">
                        <Input
                          id="gift-code"
                          type="text"
                          placeholder="Introdu codul"
                          value={giftCode}
                          onChange={(e) => setGiftCode(e.target.value)}
                          className={cn(
                            "h-8 w-32 text-sm",
                            theme === 'dark' ? 'bg-black/30 border-border' : 'bg-white/90'
                          )}
                        />
                        <Button 
                          onClick={handleGiftCodeApply}
                          variant="outline" 
                          size="sm"
                          className="h-8"
                        >
                          Aplică
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Progress bar */}
              <div className={cn(
                "w-full h-2 rounded-full mb-8",
                theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
              )}>
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((step + 1) / 6) * 100}%` }}
                />
              </div>
            </div>

            <Card className={cn(
              "border",
              theme === 'dark' ? 'bg-black/30 border-border/50' : 'bg-white'
            )}>
              <CardContent className="p-6">
                {/* PAS 0 - Package Selection */}
                {step === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h2 className="text-xl font-semibold mb-4">Alege pachetul potrivit pentru tine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {packages.map((pkg) => (
                        <PackageCard
                          key={pkg.id}
                          package={pkg}
                          isSelected={formData.selectedPackageId === pkg.id}
                          onClick={() => handlePackageSelect(pkg)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PAS 1 - repurposed from original step 1 */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="recipient-type">Pentru cine este piesa?</Label>
                      <Select
                        value={formData.recipientType}
                        onValueChange={(value) => setFormData({ ...formData, recipientType: value })}
                      >
                        <SelectTrigger id="recipient-type" className={theme === 'dark' ? 'bg-black/50' : ''}>
                          <SelectValue placeholder="Selectează..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Partener/ă">Partener/ă</SelectItem>
                          <SelectItem value="Părinte">Părinte</SelectItem>
                          <SelectItem value="Prieteni">Prieteni</SelectItem>
                          <SelectItem value="Business">Business</SelectItem>
                          <SelectItem value="Altceva">Altceva</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occasion">Ocazia:</Label>
                      <Input
                        id="occasion"
                        type="text"
                        placeholder="ex: aniversare, nuntă, botez..."
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className={theme === 'dark' ? 'bg-black/50' : ''}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Limba piesei:</Label>
                      <Select
                        value={formData.language}
                        onValueChange={(value) => setFormData({ ...formData, language: value })}
                      >
                        <SelectTrigger id="language" className={theme === 'dark' ? 'bg-black/50' : ''}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="română">română</SelectItem>
                          <SelectItem value="engleză">engleză</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* PAS 2 - Moved from original step 2 */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="mood">Starea piesei:</Label>
                      <Select
                        value={formData.mood}
                        onValueChange={(value) => setFormData({ ...formData, mood: value })}
                      >
                        <SelectTrigger id="mood" className={theme === 'dark' ? 'bg-black/50' : ''}>
                          <SelectValue placeholder="Selectează..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Veselă">Veselă</SelectItem>
                          <SelectItem value="Romantică">Romantică</SelectItem>
                          <SelectItem value="Emoțională">Emoțională</SelectItem>
                          <SelectItem value="Motivațională">Motivațională</SelectItem>
                          <SelectItem value="Amuzantă">Amuzantă</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="style">Stil muzical dorit:</Label>
                      <Input
                        id="style"
                        type="text"
                        placeholder="ex: pop acustic, trap, rock..."
                        value={formData.style}
                        onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                        className={theme === 'dark' ? 'bg-black/50' : ''}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="youtube">Link YouTube de referință (opțional):</Label>
                      <Input
                        id="youtube"
                        type="url"
                        placeholder="https://youtube.com/..."
                        value={formData.youtubeLink}
                        onChange={(e) => setFormData({ ...formData, youtubeLink: e.target.value })}
                        className={theme === 'dark' ? 'bg-black/50' : ''}
                      />
                    </div>
                  </motion.div>
                )}

                {/* PAS 3 - Moved from original step 3 */}
                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="story">Descrie povestea piesei:</Label>
                      <Textarea
                        id="story"
                        rows={4}
                        placeholder="Ex: Am cunoscut-o pe plajă, cântă despre ea și cățelul nostru..."
                        value={formData.story}
                        onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                        className={theme === 'dark' ? 'bg-black/50' : ''}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Cele mai importante 3 cuvinte sau fraze:</Label>
                      {[0, 1, 2].map((i) => (
                        <Input
                          key={i}
                          type="text"
                          placeholder={`Cuvânt/frază ${i + 1}`}
                          value={formData.keywords[i]}
                          onChange={(e) => {
                            const updated = [...formData.keywords];
                            updated[i] = e.target.value;
                            setFormData({ ...formData, keywords: updated });
                          }}
                          className={`mb-2 ${theme === 'dark' ? 'bg-black/50' : ''}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PAS 4 - Moved from original step 4 */}
                {step === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold mb-3">Opțiuni extra:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="commercial-rights"
                          checked={formData.addOns.commercialRights}
                          onCheckedChange={() => handleAddOnToggle('commercialRights', 100)} 
                        />
                        <Label htmlFor="commercial-rights">Drepturi comerciale (+100 RON)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="urgent-delivery"
                          checked={formData.addOns.urgentDelivery} 
                          onCheckedChange={() => handleAddOnToggle('urgentDelivery', 100)}
                        />
                        <Label htmlFor="urgent-delivery">Livrare urgentă (24h) (+100 RON)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="custom-message"
                          checked={formData.addOns.customMessage} 
                          onCheckedChange={() => handleAddOnToggle('customMessage', 100)}
                        />
                        <Label htmlFor="custom-message">Mesaj audio de la tine în piesă (+100 RON)</Label>
                      </div>
                      
                      {/* Conditionally render the VoiceRecorder component */}
                      {formData.addOns.customMessage && (
                        <VoiceRecorder onSave={handleVoiceRecordSave} />
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span>Preț {formData.packageName}:</span>
                      <span>{formData.basePrice} RON</span>
                    </div>
                    
                    {Object.entries(formData.addOns)
                      .filter(([_, value]) => value)
                      .map(([key, _]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span>{key === 'commercialRights' 
                              ? 'Drepturi comerciale' 
                              : key === 'urgentDelivery' 
                              ? 'Livrare urgentă' 
                              : 'Mesaj audio personalizat'}</span>
                          <span>+100 RON</span>
                        </div>
                      ))}
                    
                    {giftCodeApplied && (
                      <div className="flex items-center justify-between text-green-500">
                        <span>Card cadou:</span>
                        <span>-{formData.basePrice + calculateAddOnsTotal()} RON</span>
                      </div>
                    )}
                    
                    <div className="pt-3 mt-3 border-t border-border flex items-center justify-between">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-lg font-bold text-primary">
                        {giftCodeApplied ? "0" : formData.totalPrice} RON
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* PAS 5 - Moved from original step 5 */}
                {step === 5 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Datele de contact:</h3>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="name">Numele tău complet:</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Nume și prenume"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={theme === 'dark' ? 'bg-black/50' : ''}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email:</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@exemplu.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={theme === 'dark' ? 'bg-black/50' : ''}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon:</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="07XXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={theme === 'dark' ? 'bg-black/50' : ''}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h3 className="text-lg font-semibold mb-3">Rezumat comandă</h3>
                      <ul className="mb-4 space-y-1 text-sm">
                        <li>📦 Pachet: {formData.packageName || '—'}</li>
                        <li>🎁 Tip destinatar: {formData.recipientType || '—'}</li>
                        <li>📅 Ocazie: {formData.occasion || '—'}</li>
                        <li>🗣️ Limbă: {formData.language}</li>
                        <li>🎵 Mood: {formData.mood || '—'}</li>
                        <li>🎧 Stil: {formData.style || '—'}</li>
                        <li>🔗 YouTube: {formData.youtubeLink || '—'}</li>
                        <li>✍️ Poveste: {formData.story || '—'}</li>
                        <li>💬 Cuvinte cheie: {formData.keywords.filter(k => k).join(', ') || '—'}</li>
                        <li>➕ Add-ons: {Object.entries(formData.addOns)
                            .filter(([_, val]) => val)
                            .map(([key]) => 
                              key === 'commercialRights' 
                                ? 'Drepturi comerciale' 
                                : key === 'urgentDelivery' 
                                ? 'Livrare urgentă' 
                                : 'Mesaj personalizat'
                            )
                            .join(', ') || 'Niciunul'}</li>
                        
                        {formData.addOns.customMessage && formData.audioMessage.url && (
                          <li>🎤 Mesaj audio: {formData.audioMessage.filename} ({Math.floor(formData.audioMessage.duration / 60)}:{(formData.audioMessage.duration % 60).toString().padStart(2, '0')})</li>
                        )}
                      </ul>
                      
                      {giftCodeApplied ? (
                        <div className="text-lg font-bold text-green-500 mb-6">
                          Total achitat cu cardul cadou
                        </div>
                      ) : (
                        <div className="text-lg font-bold text-primary mb-6">
                          Total de plată: {formData.totalPrice} RON
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-8 flex justify-between">
              {step > 0 && (
                <Button 
                  onClick={prevStep} 
                  variant="outline" 
                  className={theme === 'dark' ? 'bg-black/40 border-border hover:bg-black/60' : ''}
                >
                  Înapoi
                </Button>
              )}
              
              {step < 5 ? (
                <Button 
                  onClick={nextStep} 
                  className="bg-primary hover:bg-primary/90 ml-auto"
                  ref={continueButtonRef}
                  disabled={step === 0 && formData.selectedPackageId === 0}
                >
                  Continuă
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 ml-auto">
                  Trimite comanda & mergi la plată
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
