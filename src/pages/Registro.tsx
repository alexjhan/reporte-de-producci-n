import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";

const Registro = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <GridBackground />
      <div className="relative z-10 container flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
          Registro de produccion
        </h1>
        <p className="mt-4 text-muted-foreground">
          Desde aqui podras registrar el avance diario.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default Registro;
