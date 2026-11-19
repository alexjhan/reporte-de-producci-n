import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl"
    >
      <div className="container relative flex h-16 items-center">
        <a href="#" className="flex items-center" aria-label="Inicio">
          <Logo size={24} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
