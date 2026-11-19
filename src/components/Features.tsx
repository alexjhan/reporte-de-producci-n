import { motion } from "framer-motion";
import { Terminal, Cpu, Box, FileOutput, Layers, Ruler } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Lenguaje natural",
    description: "Describe piezas como hablarías con un colega. Faber interpreta restricciones, tolerancias y materiales automáticamente.",
  },
  {
    icon: Cpu,
    title: "Motor paramétrico",
    description: "Cada dimensión es un parámetro editable. Modifica valores y el modelo se actualiza en tiempo real.",
  },
  {
    icon: Box,
    title: "Modelado sólido",
    description: "Genera geometría B-Rep precisa lista para manufactura. Sin mallas aproximadas.",
  },
  {
    icon: Layers,
    title: "Ensambles inteligentes",
    description: "Define relaciones entre piezas con lenguaje natural. Faber resuelve mates y restricciones.",
  },
  {
    icon: FileOutput,
    title: "Exportación industrial",
    description: "STEP, IGES, STL, 3MF. Compatible con SolidWorks, Fusion 360 y flujos de manufactura.",
  },
  {
    icon: Ruler,
    title: "Precisión µm",
    description: "Tolerancias ISO 2768. Control dimensional determinista para manufactura de alta precisión.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32">
      <div className="container max-w-5xl">
        {/* Section header — centered, Antigravity style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Ingeniería precisa,<br />no magia
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Cada herramienta en Faber está diseñada para dar control total al ingeniero. La IA es un copiloto, no una caja negra.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-surface-hover p-7 group"
            >
              <feature.icon
                className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-[15px] font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
