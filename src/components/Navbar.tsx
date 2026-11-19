import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Casos de uso", href: "#features" },
  { label: "Especificaciones", href: "#specs" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl"
    >
      <div className="container relative flex h-16 items-center">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={24} />
          <span className="text-[15px] font-medium text-foreground">Faber</span>
        </a>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
