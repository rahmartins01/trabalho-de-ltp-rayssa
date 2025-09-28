import { Receita } from "./Receita";
import { Categoria } from "./Categoria";

export class ReceitaDoce extends Receita {
  constructor(id: number, titulo: string, modoPreparo: string) {
    super(id, titulo, Categoria.DOCE, modoPreparo);
  }

  public ehSobremesa(): boolean {
    return true; // método extra da subclasse
  }
}

