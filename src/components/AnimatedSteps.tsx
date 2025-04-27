
import { motion } from "framer-motion";
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
    }, 1000); // Change active step every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: activeStep === index ? 1.05 : 1,
            boxShadow: activeStep === index ? "0 20px 25px -5px rgba(138, 92, 255, 0.15)" : "none"
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="bg-white p-6 text-center relative overflow-hidden rounded-lg"
        >
          <motion.div 
            className="absolute inset-0 bg-primary/5 transform origin-left"
            animate={{ 
              scaleX: activeStep === index ? 1 : 0 
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative z-10">
            <motion.div 
              className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ 
                scale: activeStep === index ? 1.1 : 1,
                backgroundColor: activeStep === index ? "rgba(138, 92, 255, 0.2)" : "rgba(138, 92, 255, 0.1)"
              }}
            >
              <span className="font-bold text-primary">{index + 1}</span>
            </motion.div>
            <motion.p 
              className="text-primary"
              animate={{ 
                opacity: activeStep === index ? 1 : 0.7
              }}
            >
              {step}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSteps;

