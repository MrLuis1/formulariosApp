export interface Persona {
  nombre: string;
  juegos: Juegos[];
}

interface Juegos {
  id: number;
  nombre: string;
}