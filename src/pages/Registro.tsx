import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ClipboardCheck,
  Factory,
  Save,
  UserRound,
} from "lucide-react";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const areas = [
  "Laser",
  "Habilitado",
  "Pre ensamble inicial",
  "Pre ensamble final",
  "Soldadura manual",
  "Soldadura con robot",
  "Pintura",
  "Ensamble de máquinas",
  "Mecanizado",
  "Fundición",
  "Montaje de hornos",
];

const Registro = () => {
  const [area, setArea] = useState("");

  const registrarAvance = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!area) {
      toast.error("Selecciona un área de producción");
      return;
    }
    toast.success("Avance registrado correctamente");
  };

  return (
    <main className="relative min-h-screen bg-background">
      <GridBackground />
      <Navbar />

      <section className="relative z-10 container max-w-6xl px-4 pb-12 pt-28 md:px-6">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="mb-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
              Registro de avance
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Captura el avance diario de producción.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Producción activa
          </div>
        </div>

        <form onSubmit={registrarAvance}>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="card-surface p-5 md:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Datos del registro</h2>
                  <p className="text-xs text-muted-foreground">Completa la información del turno</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Fecha
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="date" required className="pl-9" />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Turno
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un turno" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matutino">Matutino</SelectItem>
                      <SelectItem value="vespertino">Vespertino</SelectItem>
                      <SelectItem value="nocturno">Nocturno</SelectItem>
                    </SelectContent>
                  </Select>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Orden o proyecto
                  <div className="relative">
                    <Factory className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input required placeholder="Ej. OP-2048" className="pl-9" />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Operador
                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input required placeholder="Nombre del operador" className="pl-9" />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Cantidad planificada
                  <Input required type="number" min="0" placeholder="0" />
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Cantidad producida
                  <Input required type="number" min="0" placeholder="0" />
                </label>

                <label className="grid gap-2 text-sm font-medium md:col-span-2">
                  Observaciones
                  <Textarea
                    placeholder="Describe incidencias, pendientes o información relevante..."
                    className="min-h-28 resize-none"
                  />
                </label>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-24">
              <div className="mb-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  Área de trabajo
                </p>
                <h2 className="mt-2 text-lg font-semibold">Seleccionar área</h2>
              </div>

              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Selecciona un área" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {areas.map((nombre) => (
                    <SelectItem key={nombre} value={nombre}>
                      {nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {area && (
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">{area}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Área seleccionada para este registro.
                  </p>
                </div>
              )}

              <Button type="submit" variant="hero" className="mt-5 w-full">
                <Save className="h-4 w-4" />
                Registrar avance
              </Button>
            </aside>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Registro;
