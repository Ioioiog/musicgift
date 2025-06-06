
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const initParticles = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <header className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={initParticles}
        options={{
          background: { color: { value: '#000000' } },
          particles: {
            number: { value: 50 },
            color: { value: '#ff4081' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Header Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-20 py-10">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <h1 className="text-h1 md:text-5xl font-playfair font-bold">
            Cântece personalizate pentru orice ocazie
          </h1>
          <p className="text-body md:text-lg text-pink-400">
            Emoție. Poveste. Muzică creată doar pentru tine.
          </p>
        </div>

        {/* Right Text - Interactive */}
        <motion.div
          className="mt-10 md:mt-0 text-center md:text-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-h2 md:text-2xl font-playfair font-semibold mb-2">Pentru ce este MusicGift?</h2>
          <p className="text-h2 md:text-3xl font-playfair font-bold text-pink-300 h-10">
            <Typewriter
              words={[
                'Aniversări 🎂',
                'Cereri în căsătorie 💍',
                'Jingle-uri pentru business 💼',
                'In memoriam 🕯️',
                'Just because 🎁',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-body">
            Vezi exemple
          </button>
        </motion.div>
      </div>
    </header>
  );
}
