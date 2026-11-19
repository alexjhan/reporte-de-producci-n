import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headline = "Diseña lo que imaginas\na la velocidad\ndel lenguaje";

// ← Cambia este texto por la descripción técnica definitiva
const subtitle = "Faber es la plataforma de CAD paramétrico impulsada por IA.";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < headline.length) {
        setDisplayText(headline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(199 89% 48%) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1
            className="font-semibold leading-[1.1] text-foreground tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 6vw, 5.5rem)' }}
          >
            {displayText.split('\n').map((line, i, arr) => (
              <span key={i} className="block whitespace-nowrap">
                {line}
                {i === arr.length - 1 && (
                  <span className="cursor-blink text-primary">|</span>
                )}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-[14px] font-medium text-background hover:bg-foreground/90 transition-colors">
            Comenzar ahora
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-[14px] text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all">
            Casos de uso
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
