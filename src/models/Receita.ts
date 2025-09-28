import { BaseEntity } from "./BaseEntity";
import { Ingrediente } from "./Ingrediente";
import { Categoria } from "./Categoria";

export class Receita extends BaseEntity {
  private titulo: string;
  private categoria: Categoria;
  private modoPreparo: string;
  private ingredientes: Ingrediente[] = [];  // lista de ingredientes da receita

  constructor(id: number, titulo: string, categoria: Categoria, modoPreparo: string) {
    super(id);

    if (!titulo || !modoPreparo) {
      throw new Error("Receita inválida: título e modo de preparo são obrigatórios.");
    }

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
    if (!ingrediente) throw new Error("Ingrediente inválido.");
    this.ingredientes.push(ingrediente);  // adiciona ingrediente
  }

  public removerIngredientePorId(id: number): boolean {
    const inicial = this.ingredientes.length;
    this.ingredientes = this.ingredientes.filter(i => i.id !== id);
    return this.ingredientes.length < inicial;  // retorna true se removeu
  }

  public listarIngredientes(): Ingrediente[] {
    return [...this.ingredientes];  // retorna cópia para preservar encapsulamento
  }

  public toString(): string {
    return `${this.titulo} (${this.categoria})`;
  }
}

