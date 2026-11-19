export type ProductionUser = {
  nombre: string;
  usuario: string;
  password: string;
  area: string;
};

const USERS_KEY = "reporte_produccion.users";

const initialUsers: ProductionUser[] = [
  { nombre: "Julio Llantoy", usuario: "julio.llantoy", password: "laser2026", area: "Laser" },
  { nombre: "Marco Lora", usuario: "marco.lora", password: "habilitado2026", area: "Habilitado" },
  { nombre: "Miguel Sanchez", usuario: "miguel.sanchez", password: "preensamble2026", area: "Pre ensamble" },
  { nombre: "Fredy Quinones", usuario: "fredy.quinones", password: "soldadura2026", area: "Soldadura manual" },
  { nombre: "Richard Perez", usuario: "richard.perez", password: "robot2026", area: "Soldadura con robot" },
  { nombre: "Abrahan Llamoja", usuario: "abrahan.llamoja", password: "mecanizado2026", area: "Mecanizado" },
  { nombre: "Elver Rodas", usuario: "elver.rodas", password: "pintura2026", area: "Pintura" },
  { nombre: "Manuel Dominguez", usuario: "manuel.dominguez", password: "fundicion2026", area: "Fundicion" },
  { nombre: "Roberto Bernabe", usuario: "roberto.bernabe", password: "ensamble2026", area: "Ensamble de maquinas" },
];

export const initializeUsersDatabase = () => {
  const storedUsers = localStorage.getItem(USERS_KEY);

  if (!storedUsers) {
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
  }
};

export const getUsersDatabase = (): ProductionUser[] => {
  initializeUsersDatabase();
  const storedUsers = localStorage.getItem(USERS_KEY);
  return storedUsers ? JSON.parse(storedUsers) : initialUsers;
};
