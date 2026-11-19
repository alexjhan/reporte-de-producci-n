import { motion } from "framer-motion";
import assemblyPreview from "@/assets/assembly-preview.jpg";

const steps = [
  {
    number: "01",
    command: "Define bearing housing with 62mm bore",
    description: "Describe la pieza con dimensiones y restricciones en lenguaje natural.",
  },
  {
    number: "02",
    command: "Add 4x M8 mounting holes, PCD 85mm",
    description: "Agrega features iterativamente. Cada comando modifica el modelo activo.",
  },
  {
    number: "03",
    command: "Assemble with shaft_v2 — press fit H7/p6",
    description: "Crea ensambles con ajustes ISO y relaciones de posición automatizadas.",
  },
];

const Workflow = () => {
  return (
    <section id="product" className="py-32">
      <div className="container max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Del pensamiento<br />al sólido
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Tres pasos para transformar una idea en geometría paramétrica lista para manufactura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-surface-hover p-6 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs text-primary/60 font-mono tabular-nums mt-0.5">{step.number}</span>
                  <div>
                    <code className="text-[13px] text-foreground/90 font-mono block mb-2">
                      › {step.command}
                    </code>
                    <p className="text-[13px] text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Assembly image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="float-animation"
          >
            <div className="card-surface p-1">
              <div className="rounded-xl overflow-hidden bg-background/60">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">assembly — gearbox_v3.fab</span>
                </div>
                <img
                  src={assemblyPreview}
                  alt="Vista de ensamble de caja de engranajes en Faber"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
