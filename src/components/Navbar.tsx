import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Inicio">
          <Logo size={30} />
          <span className="text-[15px] font-medium text-foreground">Producción</span>
        </a>

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
