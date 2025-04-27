
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  "Completează un scurt formular cu povestea ta",
  "Alege pachetul potrivit pentru tine",
  "Echipa MusicGift compune și înregistrează melodia ta",
  "Primești melodia ta unică în doar câteva zile!"
];

const AnimatedSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          animate={{
            scale: activeStep === index ? 1.05 : 0.95,
            opacity: activeStep === index ? 1 : 0.7,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="glass-card p-6 text-center"
        >
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="font-bold text-orange-500">{index + 1}</span>
          </div>
          <p className="text-dark-text-muted">{step}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSteps;
