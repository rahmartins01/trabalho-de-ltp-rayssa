import { Ingrediente } from "./Ingrediente";
import { Categoria } from "./categoria";

export class Receita {
  private titulo: string;
  private categoria: Categoria;
  private modoPreparo: string;
  private ingredientes: Ingrediente[] = [];

  constructor(titulo: string, categoria: Categoria, modoPreparo: string) {
    this.titulo = titulo;
    this.categoria = categoria;
    this.modoPreparo = modoPreparo;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getCategoria(): Categoria {
    return this.categoria;
  }

  public getModoPreparo(): string {
    return this.modoPreparo;
  }

  public adicionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredientes.push(ingrediente);
  }

  public listarIngredientes(): void {
    console.log(`Ingredientes da receita "${this.titulo}":`);
    this.ingredientes.forEach(i => i.exibirIngrediente());
  }
}
