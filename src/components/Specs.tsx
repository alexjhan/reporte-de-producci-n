import { motion } from "framer-motion";

const specs = [
  { label: "Tolerancia mínima", value: "±0.001 mm" },
  { label: "Formatos", value: "STEP · IGES · STL · 3MF" },
  { label: "Materiales", value: "Acero · Aluminio · Titanio · Polímeros" },
  { label: "Geometría", value: "B-Rep NURBS" },
  { label: "Normas", value: "ISO 2768 · ASME Y14.5" },
  { label: "Ensambles", value: "Mates · Press fits · Clearance" },
];

const Specs = () => {
  return (
    <section id="specs" className="py-32">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Datos técnicos
          </h2>
        </motion.div>

        <div className="card-surface p-1">
          <div className="rounded-xl overflow-hidden bg-background/40">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-center justify-between px-6 py-4 border-b border-border/30 last:border-0 hover:bg-secondary/30 transition-colors"
              >
                <span className="text-[13px] text-muted-foreground">{spec.label}</span>
                <span className="text-[13px] text-foreground font-mono tabular-nums">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
