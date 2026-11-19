import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold leading-none">F</span>
            </div>
            <span className="text-[14px] font-medium text-foreground">Faber</span>
          </div>

          {/* Contacto */}
          <a
            href="mailto:contacto@faber.app"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            contacto@faber.app
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
