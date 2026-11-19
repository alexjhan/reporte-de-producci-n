import { useMemo, useState } from "react";
import { CalendarDays, Factory, Plus, Search } from "lucide-react";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

const equipos = [
  { nombre: "Corte láser TRUMPF", serie: "LF-2401", cantidad: 12, inicio: "08 Ene 2026", entrega: "22 Ene 2026", avance: 68, area: "Laser" },
  { nombre: "Unidad hidráulica UH-40", serie: "UH-4018", cantidad: 8, inicio: "10 Ene 2026", entrega: "28 Ene 2026", avance: 45, area: "Habilitado" },
  { nombre: "Sistema de evacuación", serie: "SE-1722", cantidad: 6, inicio: "12 Ene 2026", entrega: "30 Ene 2026", avance: 82, area: "Pre ensamble inicial" },
  { nombre: "Chasis industrial CI-18", serie: "CI-1806", cantidad: 10, inicio: "15 Ene 2026", entrega: "04 Feb 2026", avance: 35, area: "Pre ensamble final" },
  { nombre: "Marco estructural MS-60", serie: "MS-6024", cantidad: 4, inicio: "16 Ene 2026", entrega: "06 Feb 2026", avance: 20, area: "Soldadura manual" },
];

const Registro = () => {
  const [areaSeleccionada, setAreaSeleccionada] = useState("Laser");
  const [busqueda, setBusqueda] = useState("");
  const [dialogAbierto, setDialogAbierto] = useState(false);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState<(typeof equipos)[number] | null>(null);

  const equiposFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return equipos.filter((equipo) => {
      const coincideArea = equipo.area === areaSeleccionada;
      const coincideTexto = !texto || `${equipo.nombre} ${equipo.serie}`.toLowerCase().includes(texto);
      return coincideArea && coincideTexto;
    });
  }, [areaSeleccionada, busqueda]);

  const abrirRegistro = (equipo: (typeof equipos)[number]) => {
    setEquipoSeleccionado(equipo);
    setDialogAbierto(true);
  };

  return (
    <main className="relative min-h-screen bg-background">
      <GridBackground />
      <Navbar />

      <section className="relative z-10 mx-auto max-w-[1440px] px-4 pb-10 pt-20 md:px-6">

        <div className="grid min-h-[620px] overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="border-b border-border bg-secondary/30 p-3 lg:border-b-0 lg:border-r">
            <p className="px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Áreas</p>
            <nav className="grid gap-1" aria-label="Áreas de producción">
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setAreaSeleccionada(area)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    areaSeleccionada === area
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {area}
                </button>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 p-4 md:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">{areaSeleccionada}</h2>
                <p className="mt-1 text-sm text-muted-foreground">Equipos y órdenes de producción</p>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={busqueda}
                  onChange={(event) => setBusqueda(event.target.value)}
                  placeholder="Buscar equipo o serie"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Nombre del equipo</TableHead>
                    <TableHead>Serie</TableHead>
                    <TableHead className="text-right">Cantidad</TableHead>
                    <TableHead>Fecha de inicio</TableHead>
                    <TableHead>Fecha de entrega</TableHead>
                    <TableHead>Avance a la fecha</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equiposFiltrados.map((equipo) => (
                    <TableRow key={equipo.serie}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Factory className="h-4 w-4" />
                          </span>
                          <span className="font-medium">{equipo.nombre}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{equipo.serie}</TableCell>
                      <TableCell className="text-right tabular-nums">{equipo.cantidad}</TableCell>
                      <TableCell>{equipo.inicio}</TableCell>
                      <TableCell>{equipo.entrega}</TableCell>
                      <TableCell>
                        <div className="min-w-32">
                          <div className="mb-1.5 flex justify-between text-xs">
                            <span className="text-muted-foreground">Avance</span>
                            <span className="font-medium tabular-nums">{equipo.avance}%</span>
                          </div>
                          <Progress value={equipo.avance} className="h-1.5" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" onClick={() => abrirRegistro(equipo)}>
                          <Plus className="h-4 w-4" />
                          Registrar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {equiposFiltrados.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                        No hay equipos registrados en esta área.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={dialogAbierto} onOpenChange={setDialogAbierto}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar avance</DialogTitle>
            <DialogDescription>
              {equipoSeleccionado ? `${equipoSeleccionado.nombre} · ${equipoSeleccionado.serie}` : ""}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setDialogAbierto(false);
              toast.success("Avance registrado correctamente");
            }}
            className="grid gap-4"
          >
            <label className="grid gap-2 text-sm font-medium">
              Fecha
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="date" required className="pl-9" />
              </div>
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Avance producido
              <Input type="number" min="0" max="100" required placeholder="Porcentaje actual" />
            </label>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setDialogAbierto(false)}>Cancelar</Button>
              <Button type="submit">Guardar avance</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Registro;
