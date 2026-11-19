import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [ahora, setAhora] = useState(() => new Date());

  useEffect(() => {
    const reloj = window.setInterval(() => setAhora(new Date()), 1000);
    return () => window.clearInterval(reloj);
  }, []);

  const fecha = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(ahora);

  const hora = new Intl.DateTimeFormat("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(ahora);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl"
    >
      <div className="container relative flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Inicio">
          <Logo size={30} />
          <span className="text-[17px] font-medium text-foreground">Producción</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm tabular-nums text-muted-foreground md:flex">
          <time dateTime={ahora.toISOString().slice(0, 10)}>{fecha}</time>
          <span className="text-border">|</span>
          <time dateTime={ahora.toISOString()}>{hora}</time>
        </div>

        <div className="flex items-center gap-2 text-sm text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <UserRound className="h-4 w-4" />
          </span>
          <span className="hidden font-medium sm:inline">Usuario responsable</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
