
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  "Completează un scurt formular cu povestea ta",
  "Alege pachetul potrivit pentru tine",
  "Echipa MusicGift compune și înregistrează melodia ta",
  "Primești melodia ta unică în doar câteva zile!"
];

const AnimatedSteps = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: hoveredStep === index ? 1.05 : 1,
            boxShadow: hoveredStep === index ? "0 20px 25px -5px rgba(138, 92, 255, 0.15)" : "none"
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ y: -10 }}
          onHoverStart={() => setHoveredStep(index)}
          onHoverEnd={() => setHoveredStep(null)}
          className="glass-card p-6 text-center cursor-pointer relative overflow-hidden group"
        >
          <motion.div 
            className="absolute inset-0 bg-primary/5 transform origin-left"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: hoveredStep === index ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <motion.div 
              className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ 
                scale: hoveredStep === index ? 1.1 : 1,
                backgroundColor: hoveredStep === index ? "rgba(138, 92, 255, 0.2)" : "rgba(138, 92, 255, 0.1)"
              }}
            >
              <span className="font-bold text-orange-500">{index + 1}</span>
            </motion.div>
            <motion.p 
              className="text-dark-text-muted"
              animate={{ 
                color: hoveredStep === index ? "#F0F6FC" : "#8B949E"
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
